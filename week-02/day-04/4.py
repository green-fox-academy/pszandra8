def indeces(list_number, number):
        if number in list_number:
            locations = []
            for l in range(len(list_number)):
                if list_number[l] == number or str(number) in str(list_number[l]):
                    locations.append(l)
            return locations

print(indeces([1, 11, 34, 52, 61], 1))