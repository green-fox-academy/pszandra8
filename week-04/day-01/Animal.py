class Animal(object):
    def __init__(self, hunger_value, thirst_value):
        self.hunger_value = int(hunger_value)
        self.thirst_value = int(thirst_value)

    def eat(self):
        self.hunger_value -= 1

    def drink(self):
        self.thirst_value -= 1

    def play(self):
        self.hunger_value += 1
        self.thirst_value += 1

zebra = Animal(10, 10)
lion = Animal(20, 20)

print(zebra.thirst_value)
zebra.drink()
print(zebra.thirst_value)

print(lion.hunger_value)
lion.play()
print(lion.hunger_value)