number = int(input("Type in a number: "))

for n in range(0, number-2):
    print("%"*(number))
    print("%" + " " * n + "%" + " " * (number - 3 - n) + "%")

print("%"*(number))