from django.conf.urls import url
from django.urls import path

from . import views

urlpatterns = [
    path('amir', views.api_testing_django_rest),
    url(r'login', views.api_login),
    url(r'users', views.api_get_all_users),

]