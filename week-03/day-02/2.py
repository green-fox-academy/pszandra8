def opening():
    try:
        with open('my-file.txt') as file:
            print(file.readlines())
            file.close()
    except FileNotFoundError:
        print("Unable to read file: my-file.txt")

opening()
