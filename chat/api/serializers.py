from rest_framework import serializers
from chat.models import Conversation, Message


class ConversationSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        """
                constructor : helps to remove field dynamically
        """
        remove_fields = kwargs.pop('remove_fields', None)
        super(ConversationSerializer, self).__init__(*args, **kwargs)

        if remove_fields:
            """
            * dynamically remove field during serialization
            * for multiple fields in a list
            """
            for field_name in remove_fields:
                self.fields.pop(field_name)

    messages = serializers.SerializerMethodField()

    def get_messages(self, conversation):

        """
        :param conversation:
        :return: last 10 message sorted according to modified date. last modified message
        stands first
        """
        _messages = Message.objects \
                        .filter(conversation=conversation) \
                        .order_by('-modified_date')[:10]

        return MessageSerializer(_messages, many=True, remove_fields=['conversation', 'is_deleted']).data



    class Meta:
        model = Conversation
        fields = '__all__'


class MessageSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        """
            constructor : helps to remove field dynamically
        """
        remove_fields = kwargs.pop('remove_fields', None)
        super(MessageSerializer, self).__init__(*args, **kwargs)

        if remove_fields:
            """
            * dynamically remove field during serialization
            * for multiple fields in a list
            """
            for field_name in remove_fields:
                self.fields.pop(field_name)

    image = serializers.SerializerMethodField()
    def get_image(self,message):
        if message.sender.image:
            return message.sender.image.url
        else:
            return None

    class Meta:
        model = Message
        fields = '__all__'
