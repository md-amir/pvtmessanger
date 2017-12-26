from django.conf.urls import url
from django.urls import path

from . import views

urlpatterns = [
    path('amir', views.test_api_django_rest),
    url(r'login/', views.rest_login),

]