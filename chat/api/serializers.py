from rest_framework import serializers

from accounts.models import AppUser


class UserSerializerForLogin(serializers.ModelSerializer):
    # club_name = serializers.SerializerMethodField()
    # referring_point = serializers.SerializerMethodField()
    # image = serializers.SerializerMethodField()
    #
    # def get_image(self, user):
    #     if user.profile.image:
    #         return user.profile.image.url
    #     else:
    #         return None

    class Meta:
        model = AppUser
        fields = ('id', 'email', 'username', 'mobile')
