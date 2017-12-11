from dice2 import Dice

def all_is_six():
    dice = Dice()
    print(dice.get_current())
    dice.roll()
    print(dice.get_current())
    for i in range(6):
        while dice.get_current(i) != 6:
            dice.reroll(i)
    print(dice.get_current())

all_is_six()