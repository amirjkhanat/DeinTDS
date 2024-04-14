from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from users.models import User
from django.contrib import messages


@login_required
def user_list(request):
    users = User.objects.all()
    return render(request, 'user_list.html', {'users': users})


@login_required
def profile_view(request):
    if not request.user.is_authenticated:
        return redirect('/django-admin/login')  # replace 'django-admin/login' with the name of your login view

    user = User.objects.filter(username=request.user.username).first()
    if user is None:
        messages.error(request, 'User does not exist.')
        return redirect('/django-admin/login')  # replace 'django-admin/login' with the name of your login view

    if request.method == 'POST':
        theme = request.POST.get('theme')
        user.theme = theme
        user.save()

    return render(request, 'profile.html')


@login_required
def logout_view(request):
    if request.method == 'POST':
        logout(request)
        return redirect('dashboard')  # replace 'login' with the name of your login view
    return render(request, 'logout.html')