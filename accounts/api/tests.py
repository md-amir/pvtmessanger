from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase



class AccountTests(APITestCase):
    def test_create_account(self):
        """
        Ensure we can create a new account object.
        """
        url = '/accounts/api/v1/login/'
        data = {'username': 'amir@gmail.com','password':'amir12345'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.data, {'success': 'False', 'message': 'User not found'})

