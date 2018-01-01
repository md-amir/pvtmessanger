from random import randint
from rest_framework.response import Response


def random_with_n_digits(n):
    """
    random number generator with n digit
    """
    range_start = 10 ** (n - 1)
    range_end = (10 ** n) - 1
    return randint(range_start, range_end)


def generate_user_name():
    """
    automatically generates a username
    :return: username (generated)
    """
    from accounts.models import AppUser

    total_user_number = AppUser.objects.all().count() + 1
    rand = random_with_n_digits(3)
    user_name = 'user' + str(total_user_number) + str(rand)
    return user_name


def upload_to_image(instance, filename):
    """ create a folder named message_image and stored image in it with their original name"""
    # return 'profile_image/{}'.format(filename)
    return  'upload/'+filename


def upload_to_file(instance, filename):
    """ create a folder named message_image and stored image in it with their original name"""
    return 'message_image/{}'.format(filename)
    return  '/'.filename



def api_status_response(status, message):
    """ used as simple true false return against rest call from view"""
    return Response({'status': status, 'message': message})
