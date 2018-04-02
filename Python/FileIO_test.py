import unittest
from FileIO import read_file

class Test_read_file(unittest.TestCase):

    def read_file(self):
      with open(self) as file:
          self.assertEqual(Test_read_file.read_file(self), file.read())

if __name__ == '__main__':
    unittest.main()