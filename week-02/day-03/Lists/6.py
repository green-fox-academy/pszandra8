
# Check if list contains all of the following elements: 4,8,12,16
# Create a function that accepts list_of_numbers as an input
# it should return "True" if it contains all, otherwise "False"

list_of_numbers = [2, 4, 6, 8, 10, 12, 14, 16]

for n in list_of_numbers:
    if n == 4 and n == 8 and n == 12 and n == 16:
        print("All in it")
    else:
        print("Not all of them are part of the list")