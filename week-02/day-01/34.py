# Write a program that asks for a number.
# It would ask this many times to enter an integer,
# if all the integers are entered, it should print the sum and average of these
# integers like:
#
# Sum: 22, Average: 4.4

number = []
number.append(int(input("Type in a number: ")))
number.append(int(input("Type in a number: ")))
number.append(int(input("Type in a number: ")))
number.append(int(input("Type in a number: ")))

sum = 0
for i in number:
    sum += i 

print(sum) 



