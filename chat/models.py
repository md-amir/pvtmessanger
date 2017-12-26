from django.db import models


from accounts.models import AppUser
from pvtmessager.models import AbstractBaseModel
from pvtmessager.utils import upload_to_file


class Conversation(AbstractBaseModel):
    created_by = models.ForeignKey(AppUser, on_delete=models.CASCADE, related_name='my_conversation')
    created_with = models.ForeignKey(AppUser, on_delete=models.CASCADE, related_name='inbox_conversation')
    is_archive = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)


class Message(AbstractBaseModel):
    conversation = models.ForeignKey(Conversation, on_delete=models.CASCADE)
    owner = models.ForeignKey(AppUser, on_delete=models.CASCADE)
    text = models.TextField(max_length=200)
    is_deleted = models.BooleanField(default=False)


class Media(AbstractBaseModel):
    file = models.FileField(upload_to=upload_to_file)
    message = models.ForeignKey(Message, on_delete=models.CASCADE)
