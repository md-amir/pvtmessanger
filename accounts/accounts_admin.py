from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

class UserAdmin(BaseUserAdmin):
    # The forms to add and change user instances
    # form = UserChangeForm
    # add_form = UserCreationForm
    list_display = ('id', 'username', 'nick_name', 'email', 'first_name',
                    'last_name', 'is_staff', 'mobile', 'mobile_verified')
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        (_('Personal info'), {'fields': ('first_name', 'last_name', 'email', 'mobile', 'nick_name')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser',
                                       'groups', 'user_permissions')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'nick_name', 'email', 'mobile', 'password1', 'password2')}
         ),
    )

    search_fields = ('email', 'fb_id', 'username', 'nick_name', 'mobile', 'first_name', 'last_name')
    ordering = ('email',)
    filter_horizontal = ()