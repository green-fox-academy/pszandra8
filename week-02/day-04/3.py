def starting(first, second):
    if second in first:
        location = len(first) - len(second)
        return location
    else:
        return -1

print(starting("Szai mai", "mai"))