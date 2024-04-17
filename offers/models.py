from django.db import models
from partnerPrograms.models import PartnerProgram
from campaigns.models import Campaign
from django.core.files.storage import default_storage


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

    def change_offer_type(self, new_offer_type, new_value):
        # If the offer_type is changing from 'html_file', delete the old file
        if self.offer_type == 'html_file' and new_offer_type != 'html_file' and self.html_file:
            if default_storage.exists(self.html_file.name):
                default_storage.delete(self.html_file.name)

        self.offer_type = new_offer_type

        # Set all fields to None
        self.html_file = None if new_offer_type != 'html_file' else new_value
        self.redirect_url = None if new_offer_type != 'redirect' else new_value
        self.preload_url = None if new_offer_type != 'preload' else new_value
        self.action_type = None if new_offer_type != 'action' else new_value
        self.action_html = None if new_offer_type != 'action' else new_value

        self.save()