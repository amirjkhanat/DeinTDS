from django.db import models


class Filter(models.Model):
    FILTER_TYPES = (
        ('type1', 'Type 1'),
        ('type2', 'Type 2'),
        # add other types here
    )
    name = models.CharField(max_length=255)
    type = models.CharField(max_length=255, choices=FILTER_TYPES)
    value = models.CharField(max_length=255)
