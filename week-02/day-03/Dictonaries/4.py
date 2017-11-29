queue = [
	{ 'name': 'Amanda', 'alcohol': 10, 'guns': 1 },
	{ 'name': 'Tibi', 'alcohol': 0, 'guns': 0 },
	{ 'name': 'Dolores', 'alcohol': 0, 'guns': 1 },
	{ 'name': 'Wade', 'alcohol': 1, 'guns': 1 },
	{ 'name': 'Anna', 'alcohol': 10, 'guns': 0 },
	{ 'name': 'Rob', 'alcohol': 2, 'guns': 0 },
	{ 'name': 'Joerg', 'alcohol': 20, 'guns': 0 }
]

def security_check():
    watchlist = []
    goers = str()
    security_alcohol_loot = 0
    for n in range(len(queue)):
        if queue[n]["guns"] == 0 and queue[n]["alcohol"] == 0:
            goers += queue[n]["name"]
        elif queue[n]["guns"] > 0:
            watchlist.append(queue[n]["name"])
            print("They are on watchlist: " + str(watchlist))
        elif queue[n]["alcohol"] > 0:
            security_alcohol_loot += queue[n]["alcohol"]
            queue[n]["alcohol"] == 0
            goers += queue[n]["name"]
            print("They can go: " + goers)

security_check()