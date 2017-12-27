from django.contrib import admin

from chat.models import Conversation, Message, Media


class ConversationAdmin(admin.ModelAdmin):
    list_display = [f.name for f in Conversation._meta.fields]

    class Meta:
        model = Conversation


class MessageAdmin(admin.ModelAdmin):
    list_display = [f.name for f in Message._meta.fields]

    class Meta:
        model = Message


class MediaAdmin(admin.ModelAdmin):
    list_display = [f.name for f in Media._meta.fields]

    class Meta:
        model = Media
