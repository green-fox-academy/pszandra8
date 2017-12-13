def count_letters(string):
    my_dict = {}
    for letter in string:
        if letter not in my_dict:
            my_dict[letter] = 1
        else:
            my_dict[letter] += 1
    return my_dict