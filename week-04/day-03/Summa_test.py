import unittest
from Summa import Summa

class TestNumbers(unittest.TestCase):
    def test_an_empty_list(self):
        sumsum = Summa()
        self.assertEqual(sumsum.summa([]), 0)

    def test_for_one(self):
        sumsum = Summa()
        self.assertEqual(sumsum.summa([1]), 1)

    def test_a_list_of_three(self):
        sumsum = Summa()
        self.assertEqual(sumsum.summa([1, 2, 3]), 6)
    
    def with_a_null(self):
        sumsum = Summa()
        self.assertEqual(sumsum.summa([Null]), Null)

if __name__ == '__main__':
    unittest.main()