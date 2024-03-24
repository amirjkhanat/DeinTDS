# CopilotTDS/urls.py
from django.contrib import admin
from django.urls import path
from django.contrib.auth import views as auth_views
from traffic_distribution_system import views

urlpatterns = [
    path("django-admin/", admin.site.urls),
    path('admin/', views.dashboard, name='dashboard'),
    path('admin/profile/', views.profile, name='profile'),
    path('admin/logout/', views.logout_view, name='logout'),
    path('admin/domain/', views.domain_list, name='domain_list'),
    path('admin/campaigns/', views.campaign_list, name='campaign_list'),
    path('admin/partner_programs/', views.partner_program_list, name='partner_program_list'),
    path('admin/traffic_sources/', views.traffic_source_list, name='traffic_source_list'),
    path('admin/filter/', views.filter_list, name='filter_list'),
    path('admin/landings/', views.landing_list, name='landing_list'),
    path('admin/offers/', views.offer_list, name='offer_list'),
    path('admin/streams/', views.stream_list, name='stream_list'),
    path('admin/campaign_revenues/', views.campaign_revenue_list, name='campaign_revenue_list'),
]