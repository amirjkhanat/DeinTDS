from django.db import models
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType

class Stream(models.Model):
    STREAM_TYPES = (
        ('direct_url', 'Direct URL'),

        ('action', 'Action'),
    )

    name = models.CharField(max_length=255)
    stream_type = models.CharField(max_length=50, choices=STREAM_TYPES, default='direct_url')
    action = models.TextField(null=True, blank=True)  # действие, если оно есть

    # Эти поля вместе представляют GenericForeignKey
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE, null=True, blank=True)
    object_id = models.PositiveIntegerField(null=True, blank=True)
    content_object = GenericForeignKey('content_type', 'object_id')