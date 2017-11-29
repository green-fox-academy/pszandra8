students = [
        {'name': 'Teodor', 'age': 3, 'candies': 2},
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Zsombor', 'age': 12, 'candies': 5},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Olaf', 'age': 12, 'candies': 7},
        {'name': 'Gerzson', 'age': 10, 'candies': 1}
]

def candy_owned():
    candy = 0
    for i in students:
        candy += i["candies"]
    print(candy)

candy_owned()

def sum_age():
    age = 0
    for i in students:
        if i["candies"] < 5:
            age += i["age"]
    print(age)

sum_age()