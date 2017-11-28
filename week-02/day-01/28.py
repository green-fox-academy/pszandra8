number = int(input("Type in a number: "))

for i in range(1, number):
        print((number - i) * " " + "*" * i + "*" * (i - 1))