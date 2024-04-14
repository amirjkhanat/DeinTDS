from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from asgiref.sync import sync_to_async
import socket
from .models import Domain
from campaigns.models import Campaign
import logging


logger = logging.getLogger(__name__)
@login_required
def domain_list(request):
    domains = Domain.objects.all()
    return render(request, 'domain_list.html', {'domains': domains})

@csrf_exempt
async def add_domain(request):
    if request.method == 'POST':
        domain_name = request.POST.get('name')
        domain = await sync_to_async(Domain.objects.create)(name=domain_name)
        return JsonResponse({'id': domain.id, 'name': domain.name})
@csrf_exempt
async def check_domain(request):
    if request.method == 'POST':
        domain_id = request.POST.get('id')
        domain = await sync_to_async(Domain.objects.get)(id=domain_id)
        try:
            ip = socket.gethostbyname(domain.name)
            server_ip = socket.gethostbyname(socket.gethostname())
            if ip == server_ip:
                domain.status = 'connected'
            else:
                domain.status = 'notconnected'
            await sync_to_async(domain.save)()
            return JsonResponse({'status': domain.status})
        except Exception as e:
            return JsonResponse({'error': str(e)})

@csrf_exempt
async def edit_domain(request):
    if request.method == 'POST':
        try:
            domain_id = request.POST.get('id')
            domain_name = request.POST.get('name')
            campaign_id = request.POST.get('campaign')

            domain = await sync_to_async(Domain.objects.get)(id=domain_id)

            campaign = None
            if campaign_id:
                campaign = await sync_to_async(Campaign.objects.get)(id=campaign_id)

            domain.name = domain_name
            domain.campaign = campaign

            await sync_to_async(domain.save)()

            logger.info(f'Domain {domain.id} updated successfully')

            return JsonResponse({'id': domain.id, 'name': domain.name, 'campaign': campaign.id if campaign else None})
        except Exception as e:
            logger.error(f'Error updating domain: {str(e)}')
            return JsonResponse({'error': str(e)})

@csrf_exempt
async def delete_domain(request):
    if request.method == 'POST':
        domain_id = request.POST.get('id')
        domain = await sync_to_async(Domain.objects.get)(id=domain_id)
        await sync_to_async(domain.delete)()
        return JsonResponse({'id': domain_id})