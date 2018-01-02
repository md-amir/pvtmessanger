from django.conf.urls import url
from django.urls import path
from . import views

urlpatterns = [
    path('my/conversations', views.api_get_my_conversations), # returns all conversations with last 10 messages, timestamp
    path(r'send/message', views.api_send_message),  # send message to other users without himself
    path(r'individual/conversation', views.api_get_individual_conversation),  # for individual conversation with 10 message

]
