list_of_numbers = [2, 4, 6, 8, 10, 12, 14, 16]

def in_it(list_of_numbers):
    for n in list_of_numbers:
        if n == 4 and n == 8 and n == 12 and n == 16:
            return(True)
        else:
            return(False)

in_it(list_of_numbers)