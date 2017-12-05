# Create a method that decrypts the duplicated-chars.txt

def decrypt(file_name):
    o_file = open(file_name, "w")
    text = o_file.read()
    return text

print(decrypt("duplicated-chars.txt"))