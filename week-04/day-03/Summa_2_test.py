import unittest
from Summa_2 import Summa_2

class TestNumbers(unittest.TestCase):
    def test_an_empty_list(self):
        sumsum = Summa_2()
        self.assertEqual(sumsum.summa_2([]), 0)

    def test_a_list_of_three(self):
        sumsum = Summa_2()
        self.assertEqual(sumsum.summa_2([1, 2, 3]), 6)

if __name__ == '__main__':
    unittest.main()