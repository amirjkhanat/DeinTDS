# admin.py
from django.contrib import admin
from .models import User, Domain, Campaign, PartnerProgram, TrafficSource, Filter, Landing, Offer, Stream, CampaignRevenue

admin.site.register(User)
admin.site.register(Domain)
admin.site.register(Campaign)
admin.site.register(PartnerProgram)
admin.site.register(TrafficSource)
admin.site.register(Filter)
admin.site.register(Landing)
admin.site.register(Offer)
admin.site.register(Stream)
admin.site.register(CampaignRevenue)