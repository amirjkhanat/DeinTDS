from django.urls import path
from . import views


urlpatterns = [
    path('', views.partner_program_list, name='partner_program_list'),
    path('add/', views.add_partner_program, name='add_partner_program'),
    path('edit/', views.edit_partner_program, name='edit_partner_program'),
    path('delete/', views.delete_partner_program, name='delete_partner_program'),
]
