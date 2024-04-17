from django.urls import path
from . import views
from domains import views as domains


urlpatterns = [
    path('', domains.domain_list, name='domain_list'),
    path('add/', domains.add_domain, name='add_domain'),
    path('check/', domains.check_domain, name='check_domain'),
    path('edit/', domains.edit_domain, name='edit_domain'),
    path('delete/', domains.delete_domain, name='delete_domain'),
]
