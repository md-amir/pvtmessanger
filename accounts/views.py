from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from rest_framework.response import Response


def index(request):
    return HttpResponse("<h1>Hello, world. You're at the accounts index web page</h1>")
