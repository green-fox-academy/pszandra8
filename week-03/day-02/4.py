file = "nincsilyen.txt"

def write(file):
    try:
        my_file = open("my-file.txt", "w")
        my_file.write("Alexandra Pal")
        my_file.close()
    except IOError:
        print("Unable to write file: my-file.txt")

write(file)