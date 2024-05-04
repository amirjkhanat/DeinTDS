# offers/api.py
from rest_framework import serializers, viewsets
from .models import PartnerProgram

class PartnerProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = PartnerProgram
        fields = '__all__'

class PartnerProgramViewSet(viewsets.ModelViewSet):
    queryset = PartnerProgram.objects.all()
    serializer_class = PartnerProgramSerializer