import unittest
from Unique import unique_characters

class TestUnique(unittest.TestCase):
    def test_strings(self):
        self.assertEqual(unique_characters("anagram"), ["n", "g", "r", "m"])

    def test_empty_string(self):
        self.assertEqual(unique_characters(""), [])

    def test_multiple_words(self):
        self.assertEqual(unique_characters("some else"), ["o", "m", "l"])

if __name__ == '__main__':
    unittest.main()