def decrypt(file_name):
    try:
        o_file = open(file_name, "r")
        new_file = open("Ordered.txt", "w")
        text = o_file.readlines()
        for i in text[::-1]:
            new_file.write(i)
        o_file.close()
        new_file.close()
        print("Order reversing is complete")
    except IOError:
        return "Unable to write file."

decrypt("reversed-order.txt")