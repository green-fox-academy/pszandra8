def unique(*int):
    numbers = []
    for number in int:
        if number not in numbers:
            numbers.append(number)
    print(numbers)

unique(1, 2, 1, 1, 1, 5, 6, 4, 2, 2)