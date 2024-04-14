from django.shortcuts import render

from django.shortcuts import render
from .models import Filter

def filter_list(request):
    filters = Filter.objects.all()
    return render(request, 'filter_list.html', {'filters': filters})
