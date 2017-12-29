from django.conf.urls import url
from django.urls import path

from . import views

urlpatterns = [
    url(r'login', views.api_login),  # for login
    url(r'users', views.api_get_all_users),  # for all users request without requester

]
