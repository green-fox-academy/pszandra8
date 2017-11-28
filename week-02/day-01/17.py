# Write a program that asks for 5 integers in a row,
# then it should print the sum and the average of these numbers like:
#
# Sum: 22, Average: 4.4

a = int(input("Type in a number: "))
b = int(input("Type in a number: "))
c = int(input("Type in a number: "))
d = int(input("Type in a number: "))
e = int(input("Type in a number: "))

sum = str(a + b + c + d + e) 
average = str((a + b + c + d + e) / 5)

print("Sum: " + sum + ", Average: " + average)