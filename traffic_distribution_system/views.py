# traffic_distribution_system/views.py
# traffic_distribution_system/views.py
from django.shortcuts import render
import socket
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from .models import User, Domain, Campaign, PartnerProgram, TrafficSource, Filter, Landing, Offer, Stream, CampaignRevenue
from django.contrib.auth import logout
from django.shortcuts import redirect
from django.http import JsonResponse
from .models import Domain
from django.views.decorators.csrf import csrf_exempt
from asgiref.sync import async_to_sync, sync_to_async
import logging

logger = logging.getLogger(__name__)

@login_required
def dashboard(request):
    campaigns = Campaign.objects.all()
    context = {'campaigns': campaigns}
    return render(request, 'traffic_distribution_system/dashboard.html', context)

@login_required
def user_list(request):
    users = User.objects.all()
    return render(request, 'traffic_distribution_system/user_list.html', {'users': users})

@login_required
def domain_list(request):
    domains = Domain.objects.all()
    return render(request, 'traffic_distribution_system/domain_list.html', {'domains': domains})

@login_required
def campaign_list(request):
    campaigns = Campaign.objects.all()
    return render(request, 'traffic_distribution_system/campaign_list.html', {'campaigns': campaigns})

@login_required
def partner_program_list(request):
    partner_programs = PartnerProgram.objects.all()
    return render(request, 'traffic_distribution_system/partner_program_list.html', {'partner_programs': partner_programs})

@login_required
def traffic_source_list(request):
    traffic_sources = TrafficSource.objects.all()
    return render(request, 'traffic_distribution_system/traffic_source_list.html', {'traffic_sources': traffic_sources})

@login_required
def filter_list(request):
    filters = Filter.objects.all()
    return render(request, 'traffic_distribution_system/filter_list.html', {'filters': filters})

@login_required
def landing_list(request):
    landings = Landing.objects.all()
    return render(request, 'traffic_distribution_system/landing_list.html', {'landings': landings})

@login_required
def offer_list(request):
    offers = Offer.objects.all()
    return render(request, 'traffic_distribution_system/offer_list.html', {'offers': offers})

@login_required
def stream_list(request):
    streams = Stream.objects.all()
    return render(request, 'traffic_distribution_system/stream_list.html', {'streams': streams})

@login_required
def campaign_revenue_list(request):
    campaign_revenues = CampaignRevenue.objects.all()
    return render(request, 'traffic_distribution_system/campaign_revenue_list.html', {'campaign_revenues': campaign_revenues})

@login_required
def profile(request):
    return render(request, 'profile.html')

@login_required
def logout_view(request):
    if request.method == 'POST':
            logout(request)
            return redirect("dashboard")
    return render(request, "logout.html", {})

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