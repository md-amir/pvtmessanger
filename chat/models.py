from django.db import models

# Create your models here.
from accounts.models import AppUser


class Conversation(models.Model):
    created_by = models.ForeignKey(AppUser)
    created_with = models.ForeignKey(AppUser)
