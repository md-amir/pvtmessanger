from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from pvtmessager import settings


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def after_user_creation_task(sender, instance=None, created=False, **kwargs):
    if created:  # create token for token authentication
        Token.objects.create(user=instance)
        instance.save()
