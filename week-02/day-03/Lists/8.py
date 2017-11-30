def calculator(number):
    def add(x, y):
        return x + y
    def subtract(x, y):
        return x - y
    def multiply(x, y):
        return x * y
    def divide(x, y):
        return x / y
    for i in range(len(number)):
        x = int(number[0])
        y = int(number[4])
        if number[i] == "+":
            print(add(x, y))
        elif number[i] == "-":
            print(subtract(x, y))
        elif number[i] == "*":
            print(multiply(x, y))
        elif number[i] == "/":
            print(divide(x, y))

calculator(input("Please type in the expression: "))