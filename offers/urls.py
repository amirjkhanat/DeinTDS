from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from offers.api import OfferViewSet

router = DefaultRouter()
router.register(r'api/offers', OfferViewSet, basename='offers')

urlpatterns = [
    path('', views.offer_list, name='offer_list'),
    path('add/', views.add_offer, name='add_offer'),  # new URL pattern for 'add_offer'
    path('delete/', views.delete_offer, name='delete_offer'),  # new URL pattern for 'delete_offer'
    path('edit/<int:offer_id>/', views.edit_offer, name='edit_offer'),
    path('get/<int:offer_id>/', views.get_offer, name='get_offer'),
    path('', include(router.urls)),  # include the router's URLs
]