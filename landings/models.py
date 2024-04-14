from django.db import models
from campaigns.models import Campaign
from offers.models import Offer


class Landing(models.Model):
    name = models.CharField(max_length=255)
    html_file = models.FileField(upload_to='landings/', null=True, blank=True)  # ссылка на HTML-файл
