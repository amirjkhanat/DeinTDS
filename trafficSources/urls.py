from django.urls import path
from trafficSources import views as trafficSources


urlpatterns = [
    path('admin/trafficsources/', trafficSources.traffic_source_list, name='traffic_source_list'),
    path('admin/trafficsources/add/', trafficSources.add_traffic_source, name='add_traffic_source'),
    path('admin/trafficsources/edit/', trafficSources.edit_traffic_source, name='edit_traffic_source'),
    path('admin/trafficsources/delete/', trafficSources.delete_traffic_source, name='delete_traffic_source'),
]