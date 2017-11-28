number = int(input("Type in a number: "))
first_half = []
second_half = []

for i in range(number - 1):
        first_half = ((number - i) * " " + (2 * i + 1) * "*")
        print(first_half)

for i in range(number-1, -1, -1):
        second_half = ((number - i) * " " + (2 * i + 1) * "*")
        print(second_half)