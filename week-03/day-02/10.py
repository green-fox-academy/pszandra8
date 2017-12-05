def decrypt(file_name):
    try:
        o_file = open(file_name, "r")
        new_file = open("decoded-lines.txt", "w")
        lines = o_file.readlines()
        for line in lines:
            string = ""
            for char in line:
                number = ord(char)
                if number != 32:
                    temporary = chr(number - 1)
                    string += temporary
                else:
                    string += " "
            new_file.writelines(string + "\n")
        print("Decoding is complete")
    except IOError:
        return "Unable to write file."

decrypt("encoded-lines.txt")