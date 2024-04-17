from django.urls import path
from trafficSources import views as trafficSources


urlpatterns = [
    path('', trafficSources.traffic_source_list, name='traffic_source_list'),
    path('add/', trafficSources.add_traffic_source, name='add_traffic_source'),
    path('edit/', trafficSources.edit_traffic_source, name='edit_traffic_source'),
    path('delete/', trafficSources.delete_traffic_source, name='delete_traffic_source'),
]