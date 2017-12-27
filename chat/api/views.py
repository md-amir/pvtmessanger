from django.contrib.auth import authenticate
from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from rest_framework import permissions
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

from accounts.api.serializers import UserSerializer
from accounts.models import AppUser


@api_view(['POST', 'GET'])
def test_api_django_rest(request, version):
    return Response(
        {"status": True, "message": "your request has been successfully tested."}
    )


@api_view(['POST'])
@permission_classes((permissions.AllowAny,))
def rest_login(request, version):
    user = None


@api_view(['GET'])
def api_get_all_conversations(request, version):
    user = request.user

    return Response({"status": True})
