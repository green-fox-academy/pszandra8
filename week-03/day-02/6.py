def copy(file1, file2):
    try:
        f1 = open(file1, "w")
        f2 = open(file2, "r")
        text = f2.read()
        f1.write(text)
        f1.close()
        f2.close()
        return True
    except IOError:
        print("Unable to write file.")

print(copy("text.txt", "my-file.txt"))