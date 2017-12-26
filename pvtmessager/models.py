from django.db import models
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response


class AbstractBaseModel(models.Model):
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class CommonPagination(LimitOffsetPagination):
    default_limit = 3

    def get_paginated_response(self, data=None, tag="data"):
        return Response({
            'next': self.get_next_link(),
            'previous': self.get_previous_link(),
            'count': self.count,
            'success': True,
            'message': 'successful',
            tag: data
        })