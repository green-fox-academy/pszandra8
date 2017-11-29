girls = ["Eve", "Ashley", "Bözsi", "Kat", "Jane"]
boys = ["Joe", "Fred", "Béla", "Todd", "Neef", "Jeff"]
order = []

for i in range(len(boys)):
    if i <= 4:
        order.append(boys[i])
        order.append(girls[i])
        order.append(boys[5])

print(order)