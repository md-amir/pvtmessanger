from rest_framework import serializers
from accounts.models import AppUser


class UserSerializerForLogin(serializers.ModelSerializer):

    class Meta:
        model = AppUser
        fields = ('id', 'email', 'username')
