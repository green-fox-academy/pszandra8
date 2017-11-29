
accounts = [
	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23 },
	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
]

def cash():
    for i in accounts:
        print(i["client_name"])
        print(i["balance"])

cash()

def transfer(from_account_number, to_account_number, amount_to_transfer):
    numbers = []
    from_a = str()
    to_a = str()
    for n in accounts:
        numbers.append(n["account_number"])
    if from_account_number in numbers and to_account_number in numbers:
        for i in range(len(accounts)):
            if accounts[i]["account_number"] == from_account_number:
                from_a = i
            if accounts[i]["account_number"] == to_account_number:
                to_a = i
        accounts[from_a]["balance"] -= amount_to_transfer
        accounts[to_a]["balance"] += amount_to_transfer
        print(accounts)
    elif from_account_number not in numbers or to_account_number not in numbers:
        print("404 - account not found")

transfer(11234543, 43546731, 200000099.2)