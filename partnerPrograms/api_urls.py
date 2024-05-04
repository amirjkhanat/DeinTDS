# offers/api_urls.py

from django.urls import path
from .api import PartnerProgramViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'partner-programs', PartnerProgramViewSet, basename='partnerProgramViewSet')

urlpatterns = router.urls