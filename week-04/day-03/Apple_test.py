import unittest
from Apple import Apple

class TestApple(unittest.TestCase):
    def test_strings(self):
        apple = Apple()
        self.assertEqual(apple.get_apple(), "apple")

if __name__ == '__main__':
    unittest.main()