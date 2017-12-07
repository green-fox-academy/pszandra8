def count(n):
    if n != 0:
        count(n - 1)
    print(n)

count(9)

def countdown(number):
    if number == 0:
        return 0
    else:
        countdown(number - 1)
    print(number)