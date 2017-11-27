number = int(input("Type in a number: "))
for n in range(0, number+1, 1):
    print(((number - n) // 2) * " " + "*" * n + ((number - n) // 2) * " ")