from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Stream


@login_required
def stream_list(request):
    streams = Stream.objects.all()
    return render(request, 'stream_list.html', {'streams': streams})