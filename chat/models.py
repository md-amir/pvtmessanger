from django.db import models


from accounts.models import AppUser
from pvtmessager.models import AbstractBaseModel
from pvtmessager.utils import upload_to_file


class Conversation(AbstractBaseModel):
    subscriber = models.ManyToManyField(AppUser, related_name='conversations')
    creator_id = models.IntegerField(default=0)  # storing creator user id when it's created one time
    is_archived = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)

    def __str__(self):
        return str(self.id)


class Message(AbstractBaseModel):
    conversation = models.ForeignKey(Conversation, on_delete=models.CASCADE, related_name='messages')
    sender = models.ForeignKey(AppUser, on_delete=models.CASCADE)
    text = models.TextField(max_length=200)
    is_deleted = models.BooleanField(default=False)
    is_marked_read = models.BooleanField(default=False)

    def __str__(self):
        return self.text


class Media(AbstractBaseModel):
    file = models.FileField(upload_to=upload_to_file)
    message = models.ForeignKey(Message, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.id)
