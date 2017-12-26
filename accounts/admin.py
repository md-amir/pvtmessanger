from django.contrib import admin

# Register your models here.
from rest_framework.authtoken.models import Token

from accounts.accounts_admin import UserAdmin
from accounts.models import AppUser

admin.site.register(AppUser, UserAdmin)

class TokenAdmin(admin.ModelAdmin):
    list_display = ('created', 'user', 'key')
    fields = ('user',)
    ordering = ('-created',)
    search_fields = ('user__nick_name', 'key')
admin.site.unregister(Token)  # First unregister the old class
admin.site.register(Token, TokenAdmin)  # Then register the new class