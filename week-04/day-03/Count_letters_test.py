import unittest
from Count_letters import count_letters

class Test_letter_counter(unittest.TestCase):
    def test_word(self):
        self.assertEqual(count_letters("abc"), {"a" : 1, "b" : 1, "c" : 1})

    def test_empty(self):
        self.assertEqual(count_letters("aabbccd"), {"a" : 2, "b" : 2, "c" : 2, "d" : 1})

if __name__ == '__main__':
    unittest.main()