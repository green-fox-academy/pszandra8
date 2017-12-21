import sys
filename = "favourites.txt"

class FileManager(object):
    def file_opener(self):
        try:
            open_file = open(filename, "r")
            lines = open_file.readlines()
            open_file.close()
            text = ""
            for line in lines:
                text += line
            print("Favorite animals:\n" + text)
        except FileNotFoundError:
            print("Did not find the file")

    def add_text(self):
        try:
            favorite_file = open(filename, "r")
            lines = favorite_file.readlines()
            favorite_file.close()
            favorite_file = open(filename, "a")
            user_input = sys.argv[1]
            if user_input + "\n" not in lines:
                favorite_file.write("\n" + user_input)
                favorite_file.close()
                print("Animal has been added to your favorites")
            else:
                print("Animal is already in the list")
        except IOError:
            print("Unable to write file.")

manager = FileManager()

if len(sys.argv) == 1:
    manager.file_opener()
elif len(sys.argv) >= 2:
    manager.add_text()