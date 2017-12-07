string = input("Please type in a string: ")

def changer(string):
    if len(string) < 1:
        return string
    else:
        return string[0] + "*" + changer(string[1:])

print(changer(string))