from rest_framework import serializers
from accounts.models import AppUser


class UserSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        """
        constructor : helps to remove field dynamically
        """
        remove_fields = kwargs.pop('remove_fields', None)
        super(UserSerializer, self).__init__(*args, **kwargs)

        if remove_fields:
            # dynamically remove field during serialization
            # for multiple fields in a list
            for field_name in remove_fields:
                self.fields.pop(field_name)

    image = serializers.SerializerMethodField()

    def get_image(self, user):
        # returns the absolute path
        if user.image:
            return user.image.url
        return None

    class Meta:
        model = AppUser
        fields = '__all__'
