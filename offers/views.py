from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Offer
from django.shortcuts import render, redirect
from .forms import OfferForm
from django.http import JsonResponse
from asgiref.sync import sync_to_async
import logging

# Настройка логирования
logging.basicConfig(filename='app.log', filemode='w', format='%(name)s - %(levelname)s - %(message)s', level=logging.DEBUG)

@login_required
def offer_list(request):
    offers = Offer.objects.all()
    form = OfferForm()  # create an instance of the form
    return render(request, 'offer_list.html', {'offers': offers, 'form': form})


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
async def edit_offer(request, offer_id):
    offer = await sync_to_async(Offer.objects.get)(id=offer_id)
    if request.method == 'POST':
        form = OfferForm(request.POST, request.FILES, instance=offer)
        is_valid = await sync_to_async(form.is_valid)()
        if is_valid:
            await sync_to_async(form.save)()
            return JsonResponse({'status': 'success'})
    else:
        form = await sync_to_async(OfferForm)(instance=offer)
        form_html = form.as_p()  # generate the form HTML
        return JsonResponse({'form': form_html})