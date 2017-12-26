from django.contrib import admin

from chat.chat_admin import ConversationAdmin, MessageAdmin, MediaAdmin
from chat.models import Conversation, Message, Media

admin.site.register(Conversation, ConversationAdmin)
admin.site.register(Message, MessageAdmin)
admin.site.register(Media, MediaAdmin)
