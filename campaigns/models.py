from django.db import models
from users.models import User


class Campaign(models.Model):
    name = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='campaigns')
    traffic_source = models.ForeignKey('trafficSources.TrafficSource', on_delete=models.CASCADE, related_name='campaigns')

class CampaignRevenue(models.Model):
    campaign = models.ForeignKey(Campaign, on_delete=models.CASCADE)
    revenue = models.DecimalField(max_digits=8, decimal_places=2)
    currency = models.CharField(max_length=255)