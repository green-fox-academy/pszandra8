class Animal(object):
    def __init__(self, hunger_value = 50, thirst_value = 50):
        self.hunger_value = int(hunger_value)
        self.thirst_value = int(thirst_value)

    def eat(self):
        self.hunger_value -= 1

    def drink(self):
        self.thirst_value -= 1

    def play(self):
        self.hunger_value += 1
        self.thirst_value += 1