# models.py
from django.db import models
from django.contrib.auth.models import AbstractUser

# models.py
# models.py
class User(AbstractUser):
    groups = models.ManyToManyField(
        'auth.Group',
        blank=True,
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
        related_name="custom_user_set",
        related_query_name="user",
        verbose_name='groups'
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        blank=True,
        help_text='Specific permissions for this user.',
        related_name="custom_user_set",
        related_query_name="user",
        verbose_name='user permissions'
    )

class Domain(models.Model):
    name = models.CharField(max_length=255)
    campaign = models.ForeignKey('Campaign', on_delete=models.CASCADE, related_name='domains', null=True)
    STATUS_CHOICES = [
        ('connected', 'Connected'),
        ('not connected', 'Not Connected'),
    ]
    status = models.CharField(max_length=13, choices=STATUS_CHOICES, default='not connected')

class Campaign(models.Model):
    name = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='campaigns')
    domain = models.ForeignKey(Domain, on_delete=models.CASCADE, related_name='campaigns')
    traffic_source = models.ForeignKey('TrafficSource', on_delete=models.CASCADE, related_name='campaigns')

class PartnerProgram(models.Model):
    name = models.CharField(max_length=255)

class TrafficSource(models.Model):
    name = models.CharField(max_length=255)

class Filter(models.Model):
    FILTER_TYPES = (
        ('type1', 'Type 1'),
        ('type2', 'Type 2'),
        # add other types here
    )
    name = models.CharField(max_length=255)
    type = models.CharField(max_length=255, choices=FILTER_TYPES)
    value = models.CharField(max_length=255)

class Landing(models.Model):
    name = models.CharField(max_length=255)
    campaign = models.ForeignKey(Campaign, on_delete=models.CASCADE)

class Offer(models.Model):
    name = models.CharField(max_length=255)
    partner_program = models.ForeignKey(PartnerProgram, on_delete=models.CASCADE)
    campaign = models.ForeignKey(Campaign, on_delete=models.CASCADE)

class Stream(models.Model):
    landing = models.OneToOneField(Landing, on_delete=models.CASCADE)
    offer = models.OneToOneField(Offer, on_delete=models.CASCADE)
    custom_url = models.TextField()
    file_path = models.CharField(max_length=255)
    redirect_type = models.CharField(max_length=255)
    macro_variables = models.JSONField()
    filters = models.ManyToManyField(Filter)

class CampaignRevenue(models.Model):
    campaign = models.ForeignKey(Campaign, on_delete=models.CASCADE)
    revenue = models.DecimalField(max_digits=8, decimal_places=2)
    currency = models.CharField(max_length=255)