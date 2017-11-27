number = 100
guess = int(input("Please make a guess: "))
if guess < number:
    print("The stored number is higher")
elif number < guess:
    print("The stored number is lower")
else:
    print("You found the number: 100")