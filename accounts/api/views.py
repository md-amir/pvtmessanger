from django.contrib.auth import authenticate
from rest_framework import permissions
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

from accounts.api.serializers import UserSerializer
from accounts.models import AppUser


@api_view(['POST', 'GET'])
def api_testing_django_rest(request, version):
    return Response(
        {"status": True, "message": "your request has been successfully tested."}
    )


@api_view(['POST'])
@permission_classes((permissions.AllowAny,))
def api_login(request, version):
    """
    :param request: with username, password
    :param version:
    :return: status, successful message, and user instance with id, username, email and token number for further
    http calls fro token authentication

    """
    username = request.data.get("username", None)
    if not username:
        return Response({"status": False, "message": "user name missing"})
    password = request.data.get("password", None)

    if not password:
        return Response({"status": False, "message": "password missing"})

    if AppUser.objects.filter(username=username).exists():
        user = AppUser.objects.get(username=username)
    else:
        return Response({"status": False,
                         "message": "User not found"})

    if not user.check_password(password):
        return Response({"status": False,
                         "message": "password or username is not valid"})

    # check authentication
    user = authenticate(username=username, password=password)

    if not user:
        # authentication failed return message
        return Response({"status": False,
                         "message": "User not found"})

    if user.is_active:
        # activeness check
        token = Token.objects.get(user_id=user.id)

        return Response({"status": True,
                         "message": "Login successful", "token": token.key,
                         "user": UserSerializer(user, remove_fields=['password', 'id', 'last_login', 'is_active',
                                                                     'is_staff', 'is_superuser', 'first_name',
                                                                     'last_name', 'groups', 'user_permissions',
                                                                     'date_joined']).data})
    else:
        return Response({
            "status": False,
            "message": "User not active"
        })


@api_view(['POST'])
def api_get_all_users(request, version):
    """
    :param request:
    :param version:
    :return: all users sorting according to name Alphabetical order
    """
    me = request.user  # logged user
    users = AppUser.objects.all().order_by('username').exclude(pk=me.id)
    return Response({'status': True, 'users': UserSerializer(users, many=True,
                                                             remove_fields=['password', 'id', 'last_login', 'is_active',
                                                                            'is_staff', 'is_superuser', 'first_name',
                                                                            'last_name', 'groups', 'user_permissions',
                                                                            'date_joined']).data})
