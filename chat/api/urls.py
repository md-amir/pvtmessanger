from django.urls import path
from . import views

urlpatterns = [
    path('conversations', views.api_get_all_conversations), # returns all conversations with last 10 messages, timestamp
    path(r'send/message', views.api_send_message),  # send message to other users without himself
]
