from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Offer, Campaign
from django.shortcuts import render, redirect
from .forms import OfferForm
from django.http import JsonResponse
from asgiref.sync import sync_to_async
import logging
from django.shortcuts import get_object_or_404
from django.core.files.storage import default_storage

# Настройка логирования
logging.basicConfig(filename='app.log', filemode='w', format='%(name)s - %(levelname)s - %(message)s', level=logging.DEBUG)

@login_required
def offer_list(request):
    offers = Offer.objects.all()
    form = OfferForm()  # create an instance of the form
    return render(request, 'offer_list.html', {'offers': offers, 'form': form})

@login_required
def get_offer(request, offer_id):
    offer = get_object_or_404(Offer, id=offer_id)
    data = {
        'name': offer.name,
        'offer_type': offer.offer_type,
        'html_file': offer.html_file.url if offer.html_file else '',
        'redirect_url': offer.redirect_url,
        'preload_url': offer.preload_url,
        'action_type': offer.action_type,
        'action_html': offer.action_html,
        'campaign': offer.campaign.id if offer.campaign else None,
    }
    return JsonResponse(data)

async def add_offer(request):
    logging.debug('add_offer called with method %s', request.method)
    if request.method == 'POST':
        form = OfferForm(request.POST, request.FILES)
        is_valid = await sync_to_async(form.is_valid)()
        if is_valid:
            offer = await sync_to_async(form.save)()
            logging.debug('Offer saved with id %s', offer.id)
            return JsonResponse({'status': 'success', 'offer_id': offer.id})
        else:
            errors = form.errors  # No need to use sync_to_async here
            logging.warning('Form is not valid: %s', errors)
            logging.debug('Received form data: %s', request.POST)
            return JsonResponse({'status': 'error', 'errors': errors}, status=400)
    else:
        logging.error('Invalid request method: %s', request.method)
        return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=400)

def delete_offer(request):
    if request.method == 'POST':
        offer_id = request.POST.get('id')
        Offer.objects.filter(id=offer_id).delete()
        return JsonResponse({'status': 'success'})
    else:
        return JsonResponse({'status': 'failed', 'error': 'Invalid request method'})


@login_required
def edit_offer(request, offer_id):
    if request.method == 'POST':
        offer = get_object_or_404(Offer, id=offer_id)
        new_offer_type = request.POST.get('offer_type')  # Make sure this is not NULL

        # If the offer_type is changing from 'html_file', delete the old file
        if offer.offer_type == 'html_file' and new_offer_type != 'html_file' and offer.html_file:
            if default_storage.exists(offer.html_file.name):
                default_storage.delete(offer.html_file.name)

        # Use the new change_offer_type method to update the offer_type and corresponding field
        if new_offer_type == 'html_file':
            new_value = request.FILES.get('html_file')  # Get the file from request.FILES
        elif new_offer_type == 'redirect':
            new_value = request.POST.get('redirect_url')
        elif new_offer_type == 'preload':
            new_value = request.POST.get('preload_url')  # Get the new preload URL
        elif new_offer_type == 'action':
            new_value = request.POST.get('action_type')

        offer.change_offer_type(new_offer_type, new_value)

        # Update the action_html and campaign fields if the offer_type is 'action'
        if new_offer_type == 'action':
            offer.action_html = request.POST.get('action_html')
            campaign_id = request.POST.get('campaign')
            if campaign_id:
                campaign = get_object_or_404(Campaign, id=campaign_id)
                offer.campaign = campaign

        # Update the preload_url
        if new_value:
            offer.preload_url = new_value

        offer.save()  # Save the changes to the database

        return JsonResponse({'status': 'success'})
    else:
        offer = get_object_or_404(Offer, id=offer_id)
        campaigns = Campaign.objects.all()  # получаем все кампании из базы данных
        return render(request, 'offer_list.html', {'offer': offer, 'campaigns': campaigns})
