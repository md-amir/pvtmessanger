from django.urls import path

from . import views

urlpatterns = [
    # just for testing purpose
    path('', views.index),

]
