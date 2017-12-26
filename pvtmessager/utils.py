from random import randint

def random_with_N_digits(n):
    range_start = 10 ** (n - 1)
    range_end = (10 ** n) - 1
    return randint(range_start, range_end)

def generate_user_name():
    from accounts.models import AppUser

    total_user_number = AppUser.objects.all().count() + 1
    rand = random_with_N_digits(3)
    user_name = 'user' + str(total_user_number) + str(rand)
    return user_name