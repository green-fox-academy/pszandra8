import random

def choose(add):
    lives = 5
    number = random.randint(0, add)
    print("You have 5 lives to begin with.")
    while lives > 0:
        guess = int(input("Please make a guess: "))
        if guess > number:
            lives -= 1
            print("Too high. " + "You have " + str(lives) + " lives left.")
        elif guess < number:
            lives -= 1
            print("Too low. " + "You have " + str(lives) + " lives left.")
        elif guess == number:
            return "Congratulations. You won!"

print(choose(int(input("Please provide a range: "))))