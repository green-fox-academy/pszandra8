filename = 'text.txt'

def counting_lines(filename):
    try:
        file = open(filename, "r")
        lines = file.readlines()
        file.close()
        return len(lines)
    except FileNotFoundError:
        return 0

print(counting_lines(filename))