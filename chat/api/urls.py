from django.conf.urls import url
from django.urls import path

from . import views

urlpatterns = [
    path('conversations', views.api_get_all_conversations),

]