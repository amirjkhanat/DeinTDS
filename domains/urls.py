from django.urls import path
from . import views
from domains import views as domains


urlpatterns = [
    path('admin/domain/', domains.domain_list, name='domain_list'),
    path('admin/domain/add/', domains.add_domain, name='add_domain'),
    path('admin/domain/check/', domains.check_domain, name='check_domain'),
    path('admin/domain/edit/', domains.edit_domain, name='edit_domain'),
    path('admin/domain/delete/', domains.delete_domain, name='delete_domain'),
]
