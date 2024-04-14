from django.urls import path
from . import views


urlpatterns = [
    path('admin/partnerprograms/', views.partner_program_list, name='partner_program_list'),
    path('admin/partnerprograms/add/', views.add_partner_program, name='add_partner_program'),
    path('admin/partnerprograms/edit/', views.edit_partner_program, name='edit_partner_program'),
    path('admin/partnerprograms/delete/', views.delete_partner_program, name='delete_partner_program'),
]
