number = []
number.append(int(input("Type in a number: ")))
number.append(int(input("Type in a number: ")))
number.append(int(input("Type in a number: ")))
number.append(int(input("Type in a number: ")))

sum = 0
for i in number:
    sum += i 

average = 0
for n in number:
    average = sum / n

print("Sum: " + str(sum))
print("Average: " + str(average))