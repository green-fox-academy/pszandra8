import unittest
from summa import summa

class TestSumma(unittest.TestCase):
    def test_sum_of_empty(self):
        self.assertEqual(summa([]), 0)

    def test_sum_of_3_numbers(self):
        self.assertEqual(summa([1, 2, 3]), 6)


if __name__ == '__main__':
    unittest.main()