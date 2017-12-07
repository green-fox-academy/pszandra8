def bunny_ears(bunny):
    if bunny == 0:
        return 0
    elif bunny % 2 != 0:
        return 2 + bunny_ears(bunny - 1)
    else:
        return 3 + bunny_ears(bunny - 1)


print(bunny_ears(5))