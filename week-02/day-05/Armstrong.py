number = 1634
number2 = 371

def armstrong(number):
    list_of_numbers = []
    power = []
    sum = 0
    for n in str(number):
        list_of_numbers.append(n)
    for t in list_of_numbers:
        t = int(t)
        power.append(t ** len(list_of_numbers))
    for m in range(len(power)):
        sum += power[m]
    if sum == number:
        print(str(number) + " is an Armstrong number.")
    else:
        print (str(number) + " is not an Armstrong number.")

armstrong(number)
armstrong(number2)
armstrong(8894354)
    
