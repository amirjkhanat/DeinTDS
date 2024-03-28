from django.test import TestCase, Client
from django.urls import reverse
from urllib.parse import urlencode
from .models import Domain, Campaign

class EditDomainTest(TestCase):
    def setUp(self):
        self.client = Client()
        self.edit_domain_url = reverse('edit_domain')
        self.domain = Domain.objects.create(name='test.com')  # Создаем Domain

    def test_edit_domain(self):
        data = {'id': self.domain.id, 'name': 'newtest.com'}
        response = self.client.post(self.edit_domain_url, urlencode(data),
                                    content_type='application/x-www-form-urlencoded')
        self.assertEqual(response.status_code, 200)
        json_response = response.json()
        self.assertEqual(json_response['name'], 'newtest.com')