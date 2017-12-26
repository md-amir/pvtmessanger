from django.contrib.auth.models import BaseUserManager

from pvtmessager.utils import generate_user_name


class AppUserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, username, email, password, mobile, **extra_fields):
        if not username:
            # raise ValueError('The given username must be set')
            username = generate_user_name()

        email = self.normalize_email(email)
        user = self.model(username=username, email=email, mobile=mobile, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, username, email=None, password=None, mobile=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)

        return self._create_user(username, email, password, mobile, **extra_fields)

    def create_superuser(self, email, password, username='',**extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(username, email, password, mobile=None, **extra_fields)