import unittest
from Sharpie import Sharpie

class Test_sharpie(unittest.TestCase):

    def test_for_width(self):
        thing = Sharpie("red", 120)
        self.assertEqual(thing.color, "red")
        self.assertEqual(thing.width, 120)

if __name__ == '__main__':
    unittest.main()