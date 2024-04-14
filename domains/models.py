from django.db import models

class Domain(models.Model):
    name = models.CharField(max_length=255)
    campaign = models.ForeignKey('campaigns.Campaign', on_delete=models.CASCADE, related_name='domains', null=True)
    STATUS_CHOICES = [
        ('connected', 'Connected'),
        ('not connected', 'Not Connected'),
    ]
    status = models.CharField(max_length=13, choices=STATUS_CHOICES, default='not connected')
