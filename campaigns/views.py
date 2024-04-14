from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Campaign

@login_required
def campaign_list(request):
    campaigns = Campaign.objects.all()
    return render(request, 'campaign_list.html', {'campaigns': campaigns})


@login_required
def dashboard(request):
    campaigns = Campaign.objects.all()
    context = {'campaigns': campaigns}
    return render(request, 'dashboard.html', context)
