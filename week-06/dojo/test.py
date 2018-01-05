import unittest
from poker import *

class TestPoker(unittest.TestCase):

   def test_empty_deck(self):
       game = Game()
       self.assertEqual(game.deck(), [])

   def test_card(self):
       game = Game()
       self.assertEqual(game.make_card(), "SA")

if __name__ == '__main__':
   unittest.main()