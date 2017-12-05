def decrypt(file_name):
    try:
        o_file = open(file_name, "r")
        new_file = open("reversed.txt", "w")
        text = o_file.readlines()
        for line in text:
            new_file.write(line[::-1])
        o_file.close()
        new_file.close()
        print("Reversing is complete")
    except IOError:
        return "Unable to write file."

decrypt("reversed-lines.txt")