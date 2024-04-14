from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import TrafficSource
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

@csrf_exempt
@login_required
def traffic_source_list(request):
    traffic_sources = TrafficSource.objects.all()
    return render(request, 'traffic_source_list.html', {'traffic_sources': traffic_sources})

@csrf_exempt
@login_required
def add_traffic_source(request):
    if request.method == 'POST':
        traffic_source_name = request.POST.get('name')
        traffic_source = TrafficSource.objects.create(name=traffic_source_name)
        return JsonResponse({'id': traffic_source.id, 'name': traffic_source.name})

@csrf_exempt
@login_required
def edit_traffic_source(request):
    if request.method == 'POST':
        traffic_source_id = request.POST.get('id')
        traffic_source_name = request.POST.get('name')
        traffic_source = TrafficSource.objects.get(id=traffic_source_id)
        traffic_source.name = traffic_source_name
        traffic_source.save()
        return JsonResponse({'id': traffic_source.id, 'name': traffic_source.name})

@csrf_exempt
@login_required
def delete_traffic_source(request):
    if request.method == 'POST':
        traffic_source_id = request.POST.get('id')
        traffic_source = TrafficSource.objects.get(id=traffic_source_id)
        traffic_source.delete()
        return JsonResponse({'id': traffic_source_id})