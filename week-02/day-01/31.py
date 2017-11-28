number = int(input("Type in a number: "))

print("%" * (number))
for n in range(0, number-2):
    print("%" + " " * (number - 2) + "%")

print("%" * (number))