from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse



def index(request):
    return HttpResponse("<h1>Hello, world. You're at the chat index web page</h1>")
