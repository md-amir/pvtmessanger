from random import randint


def random_with_n_digits(n):
    range_start = 10 ** (n - 1)
    range_end = (10 ** n) - 1
    return randint(range_start, range_end)


def generate_user_name():
    from accounts.models import AppUser

    total_user_number = AppUser.objects.all().count() + 1
    rand = random_with_n_digits(3)
    user_name = 'user' + str(total_user_number) + str(rand)
    return user_name


def upload_to_image(instance, filename):
    """ create a folder named message_image and stored image in it with their original name"""
    return 'profile_image/{}'.format(filename)


def upload_to_file(instance, filename):
    """ create a folder named message_image and stored image in it with their original name"""
    return 'message_image/{}'.format(filename)
