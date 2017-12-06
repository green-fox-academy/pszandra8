def add_up(n):
    if n <= 1:
        return 1
    else:
        return n + add_up(n - 1)

print(add_up(4))