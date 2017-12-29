from django.core import validators
from django.core.mail import send_mail
from django.utils.translation import ugettext_lazy as _
from django.utils import timezone
from django.contrib.auth.models import User, PermissionsMixin
from django.contrib.auth.models import AbstractBaseUser
from django.db import models
from accounts.managers import AppUserManager
from pvtmessager.utils import upload_to_image


class AppUser(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(
        _('username'),
        max_length=50,
        unique=True,
        blank=True,
        null=True,
        help_text=_('Required. 50 characters or fewer. Letters, digits and @/./+/-/_ only.'),
        validators=[
            validators.RegexValidator(
                r'^[\w.@+-]+$',
                _('Enter a valid username. This value may contain only '
                  'letters, numbers ' 'and @/./+/-/_ characters.')
            ),
        ],
        error_messages={
            'unique': _("A user with that username already exists."),
        },
    )

    email = models.EmailField(
        unique=True,
        verbose_name='email address',
        max_length=200,
        blank=True,
        null=True,
        default=None,
    )

    first_name = models.CharField(_('first name'), max_length=30, blank=True)
    last_name = models.CharField(_('last name'), max_length=30, blank=True)
    is_staff = models.BooleanField(
        _('staff status'),
        default=False,
        help_text=_('Designates whether the user can log into this admin site.'),
    )
    is_active = models.BooleanField(
        _('active'),
        default=True,
        help_text=_(
            'Designates whether this user should be treated as active. '
            'Unselect this instead of deleting accounts.'
        ),
    )
    image = models.ImageField(verbose_name='Image', upload_to=upload_to_image, null=True, blank=True)
    date_joined = models.DateTimeField(_('date joined'), default=timezone.now)

    EMAIL_FIELD = 'email'
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']  # required for creating superuser

    objects = AppUserManager()

    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')
        abstract = False

    def get_full_name(self):
        # return full name
        return "%s %s" % (self.first_name, self.last_name) if (self.first_name or self.last_name) else self.username

    def get_short_name(self):
        # returns short name
        return self.username

    def __str__(self):
        return self.username
