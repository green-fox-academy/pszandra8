number = int(input("Please type in a number: "))

def divide(number):
    try:
        print(10 / number)
    except ZeroDivisionError:
        print(not number == 0)

divide(number)