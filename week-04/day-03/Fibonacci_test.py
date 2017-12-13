import unittest
from Fibonacci import fibo

class Test_fibo(unittest.TestCase):
    def test_zero(self):
        self.assertEqual(fibo(0), 0)

    def test_one(self):
        self.assertEqual(fibo(1), 1)

    def test_valid_num(self):
        self.assertEqual(fibo(10), 55)

if __name__ == '__main__':
    unittest.main()