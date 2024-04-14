from django.urls import path
from . import views

urlpatterns = [
    path('admin/offers', views.offer_list, name='offer_list'),
    path('admin/offers/add/', views.add_offer, name='add_offer'),  # new URL pattern for 'add_offer'
    path('admin/offers/delete/', views.delete_offer, name='delete_offer'),  # new URL pattern for 'delete_offer'
    path('admin/offers/edit/<int:offer_id>/', views.edit_offer, name='edit_offer'),
]