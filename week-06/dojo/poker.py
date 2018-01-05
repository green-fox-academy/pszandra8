import random

class Game(object):
   def __init__(self):
       self.colour = ["C", "D", "H", "S"]
       self.number = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"]
       self.random_colour = 0
       self.random_number = 0


   def deck(self):
       deck = []
       return deck

   def make_card(self):
       card = ""
       self.random_colour = random.randint(0, 4)
       self.random_number = random.randint(0, 13)
       for i in range(len(self.colour)):
           if i == self.random_colour:
               card += self.colour[i]

       for i in range(len(self.number)):
           if i == self.random_number:
               card += self.number[i]
        return card

    def hand_one(self):
        
       
game = Game()
game.make_card