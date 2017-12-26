"""pvtmessage URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include

import accounts

urlpatterns = [
    url(r'^accounts/', include('accounts.urls')),  # for web pages
    url(r'^accounts/api/(?P<version>(v1|v2))/', include('accounts.api.urls')),  # for rest api
    url(r'^chat/', include('chat.urls')),  # for rest api
    url(r'^chat/api/(?P<version>(v1|v2))/', include('chat.api.urls')),  # for rest api
    path('admin/', admin.site.urls),

]
