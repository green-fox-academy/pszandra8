students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

def candy_more():
    for i in students:
        if i["candies"] > 4:
            print(i["name"])

candy_more()

def candy_ave():
    candy = 0
    for i in students:
        candy += i["candies"]
    for n in students:
        average = candy / len(students)
    print(average)

candy_ave() 