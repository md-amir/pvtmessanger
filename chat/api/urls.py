from django.urls import path
from . import views

urlpatterns = [
    path('conversations', views.api_get_all_conversations),
    path(r'send/message', views.api_send_message),
]
