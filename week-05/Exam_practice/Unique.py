def unique_characters(string):
    string = string.replace(" ", "")
    unique = {}
    keys = []
    for char in string:
        char = char.lower()
        if char not in unique:
            unique[char] = 1
        else:
            unique[char] += 1

    for n in unique:
        if unique[n] == 1:
            keys.append(n)
    return keys

print(unique_characters("anagr amand"))