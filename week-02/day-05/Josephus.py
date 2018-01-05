number = int(input("Please type in a number: "))

def josephus(number):
    list_of_number = []
    new_list = []
    if number == 1:
        return "Winning seat is: 1"
    elif number == 2:
        return "Winning seat is: 1"
    for i in range(1, number):
        list_of_number.append(i)
        while i > 0:
            for t in list_of_number:
                new_list.append(list_of_number - list_of_number[(i + 1) * 2])
                return new_list

print(josephus(number))