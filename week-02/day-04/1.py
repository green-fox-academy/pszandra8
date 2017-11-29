def unique(*int):
    numbers =[]
    for i in int:
        if i not in numbers:
            numbers.append(i)
    print(numbers)

unique(1, 2, 1, 1, 1, 5, 6, 4, 2, 2)