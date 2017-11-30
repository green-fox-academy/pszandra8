ascend = False

def bubble_sort(numlist):
    for number in range(len(numlist) -1, 0, -1):
        for i in range(number):
            if ascend:
                if numlist[i] > numlist[i + 1]:
                    numlist[i], numlist[i + 1] = numlist[i + 1], numlist[i]
                    return numlist
        
            else:
                if numlist[i] < numlist[i + 1]:
                    numlist[i], numlist[i + 1] = numlist[i + 1], numlist[i]

numlist = [6, 2, 1, 5, 60, 32, 88, 102]
bubble_sort(numlist)
print(numlist)