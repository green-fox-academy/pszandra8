number1 = int(input("Type in a number: "))
number2 = int(input("Type in a number: "))

if number2 <= number1:
    print("The second number should be bigger")
else:
    for n in range(number1, number2, 1):
        print(n)