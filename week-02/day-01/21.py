girl = int(input("Please type in a number: "))
boy = int(input("Please type in a number: "))

if girl == boy and girl + boy > 20:
    print("The party is exellent!")
elif girl + boy > 20 and girl != boy:
    print("Quite cool party!")
elif girl + boy < 20:
    print("Average party...")
elif girl == 0:
    print("Sausage party")