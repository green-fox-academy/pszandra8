import unittest
from Anagram import is_anagram

class TestAnagram(unittest.TestCase):
    def test_one_word(self):
        self.assertEqual(is_anagram("dog", "god"), True)

    def test_multiple_word(self):
        self.assertEqual(is_anagram("dog god", "god dog"), True)

    def test_false_for_one(self):
        self.assertEqual(is_anagram("something", "non-something"), False)

    def test_false_for_multiple(self):
        self.assertEqual(is_anagram("lorem ipsum", "shhs nc cns"), False)

if __name__ == '__main__':
    unittest.main()