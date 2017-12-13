import unittest
from Animal import Animal

class Test_animal(unittest.TestCase):

    def test_hunger_thirst(self):
        animal = Animal(100, 100)
        self.assertEqual(animal.hunger_value, 100)
        self.assertEqual(animal.thirst_value, 100)

    def test_eat(self):
        animal = Animal(100, 100)
        animal.eat()
        self.assertEqual(animal.hunger_value, 99)

    def test_drink(self):
        animal = Animal(100, 100)
        animal.drink()
        self.assertEqual(animal.thirst_value, 99)        

    def test_play(self):
        animal = Animal(100, 100)
        animal.play()
        self.assertEqual(animal.thirst_value, 101)
        self.assertEqual(animal.hunger_value, 101)


if __name__ == '__main__':
    unittest.main()