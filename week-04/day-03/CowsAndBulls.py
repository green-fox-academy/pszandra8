import random

class Game(object):

    def __init__(self, status = "playing"):
        self.status = status

    def numbering(self):
        self.numbers = random.randint(1000, 9999)

    def guessing(self):
        self.guess_four_digit_number = int(input("Please type in 4 integers: "))
        print(self.guess_four_digit_number)

    def separating_numbers_random(self):
        nums = []
        for number in str(self.numbers):
            guess.append(nums)
        return nums

    def separating_numbers_guess(self):
        guess = []
        for number in str(self.guess_four_digit_number):
            guess.append(number)
        return guess


game = Game()
game.numbering()
game.guessing()
game.separating_numbers_guess()