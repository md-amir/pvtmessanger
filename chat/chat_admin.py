from django.contrib import admin

from chat.models import Conversation, Message, Media


class ConversationAdmin(admin.ModelAdmin):
    list_display = ('id', )
    # list_display = ('id', 'name', 'city',)

    class Meta:
        model = Conversation


class MessageAdmin(admin.ModelAdmin):
    # list_display = ('id', 'name', 'city',)
    list_display = ('id', )


    class Meta:
        model = Message


class MediaAdmin(admin.ModelAdmin):
    # list_display = ('id', 'name', 'city',)
    list_display = ('id', )

    class Meta:
        model = Media
