path = "my-file.txt"
word = str(input("Please type in a word: "))
number = int(input("Please type in a number: "))

def writting(path, word, number):
    try:
        my_file = open(path, "w")
        my_file.write((word + '\n') * number)
        my_file.close()
    except IOError:
        print("Unable to write file: my-file.txt")

writting(path, word, number)