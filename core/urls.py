"""
URL configuration for core project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from campaigns import views as campaigns
from partnerPrograms import views as partnerPrograms
from trafficSources import views as trafficSources
from filters.views import filter_list
from users.views import logout_view
from landings import views as landings
from offers import views as offers
from streams import views as streams
from django.conf.urls.static import static
from django.conf import settings
from users.views import profile_view

urlpatterns = [
    path("django-admin/", admin.site.urls),
    path("django-admin/login/", admin.site.login, name="login"),
    path('admin/', campaigns.dashboard, name='dashboard'),
    path('admin/profile/', profile_view, name='profile'),
    path('admin/logout/', logout_view, name='logout'),
    path('partnerprograms/', include('partnerPrograms.urls')),
    path('admin/traffic-source/', include('trafficSources.urls')),
    path('admin/domains/', include('domains.urls')),
    path('admin/offers/', include('offers.urls')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
