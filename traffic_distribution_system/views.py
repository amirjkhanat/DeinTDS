# traffic_distribution_system/views.py
# traffic_distribution_system/views.py
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import User, Domain, Campaign, PartnerProgram, TrafficSource, Filter, Landing, Offer, Stream, CampaignRevenue
from django.contrib.auth import logout
from django.shortcuts import redirect

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
