from django.db import models
from partnerPrograms.models import PartnerProgram
from campaigns.models import Campaign


class Offer(models.Model):
    OFFER_TYPES = (
        ('html_file', 'HTML File'),
        ('redirect', 'Redirect'),
        ('preload', 'Preload'),
        ('action', 'Action'),
    )

    ACTION_TYPES = (
        ('404', '404 Not Found'),
        ('redirect', 'Redirect to another campaign'),
        ('html', 'Show as HTML'),
    )

    name = models.CharField(max_length=255)
    offer_type = models.CharField(max_length=50, choices=OFFER_TYPES, default='html_file')
    partner_program = models.ForeignKey(PartnerProgram, on_delete=models.CASCADE)
    html_file = models.FileField(upload_to='offers/', null=True, blank=True)  # ссылка на HTML-файл
    redirect_url = models.URLField(max_length=200, null=True, blank=True)
    preload_url = models.URLField(max_length=200, null=True, blank=True)
    action_type = models.CharField(max_length=50, choices=ACTION_TYPES, null=True, blank=True)
    campaign = models.ForeignKey('campaigns.Campaign', on_delete=models.CASCADE, null=True, blank=True)
    action_html = models.TextField(null=True, blank=True)