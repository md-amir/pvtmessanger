from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from rest_framework.response import Response


def index(request):
    return render(request, 'index.html', context=None)
