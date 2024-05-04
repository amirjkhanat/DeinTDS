# offers/api_urls.py

from django.urls import path
from .api import OfferViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'offers', OfferViewSet, basename='offer')

urlpatterns = router.urls