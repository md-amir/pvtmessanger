from django.contrib.auth import authenticate
from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from rest_framework import permissions
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

from accounts.api.serializers import UserSerializerForLogin
from accounts.models import AppUser


@api_view(['POST', 'GET'])
def test_api_django_rest(request, version):
    print(request.version)
    return Response(
        {"status": True, "message": "your request has been successfully tested."}
    )


@api_view(['POST'])
@permission_classes((permissions.AllowAny,))
def rest_login(request, version):
    user = None
    username = request.data.get("username", None)
    if not username:
        return Response({"success": "False", "message": "user name missing"})
    password = request.data.get("password", None)

    if not password:
        return Response({"success": "False", "message": "password missing"})

    # if EMAIL_REGEX.search(username):
    try:
        user = AppUser.objects.get(email=username)
    except AppUser.DoesNotExist:
        pass
    if AppUser.objects.filter(mobile=username).exists():
        user = AppUser.objects.get(mobile=username)
    else:
        try:
            user = AppUser.objects.get(username=username)
        except AppUser.DoesNotExist:
            pass
    if user is None:
        return Response({"success": "False",
                         "message": "User not found"})

    if not user.check_password(password):
        return Response({"success": "False",
                         "message": "password or username is not valid"})

    user = authenticate(username=username, password=password)

    if not user:
        return Response({"success": "False",
                         "message": "User not found"})

    if user.is_active:
        token = Token.objects.get(user_id=user.id)

        return Response({"success": "True",
                         "message": "Login successful", "token": token.key,
                         "user": UserSerializerForLogin(user).data})
    else:
        return Response({
            "success": "False",
            "message": "User not active"
        })
