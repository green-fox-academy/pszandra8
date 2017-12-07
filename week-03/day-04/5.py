def bunny_ears(bunny):
    if bunny <= 1:
        return 2
    else:
        return 2 + bunny_ears(bunny - 1)

print(bunny_ears(11))