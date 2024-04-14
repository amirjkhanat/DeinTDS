from django.db import models


class TrafficSource(models.Model):
    name = models.CharField(max_length=255)
