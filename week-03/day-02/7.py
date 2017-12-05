def decrypt(file_name):
    try:
        o_file = open(file_name, "r")
        new_file = open("decrypted.txt", "w")
        text = o_file.read()
        new_text = text[::2]
        new_file.write(new_text)
    except IOError:
        return "Unable to write file."

print(decrypt("duplicated-chars.txt"))