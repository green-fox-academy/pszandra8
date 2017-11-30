ingredients = [
	{ "name": "vodka", "in_stock": 1, "needs_cooling": True },
	{ "name": "coffee_liqueur", "in_stock": 0, "needs_cooling": True },
	{ "name": "fresh_cream", "in_stock": 1, "needs_cooling": True },
	{ "name": "captain_morgan_rum", "in_stock": 2, "needs_cooling": True },
	{ "name": "mint_leaves", "in_stock": 0, "needs_cooling": False },
	{ "name": "sugar", "in_stock": 0, "needs_cooling": False },
	{ "name": "lime juice", "in_stock": 0, "needs_cooling": True },
	{ "name": "soda", "in_stock": 0, "needs_cooling": True }
]

def printing():
	length = len(ingredients[0]['name'])

	for item in range(len(ingredients)):
		if len(ingredients[item]["name"]) > length:
			length = len(ingredients[item]["name"] + 2 * " ")
	print("+" + length * "-" + "+" + 15 * "-" + "+" + 10 * "-" + "+")
	print("| Ingredient " + (length - 12) * " " + "| Needs cooling " + "| In stock |") 
	print("+" + length * "-" + "+" + 15 * "-" + "+" + 10 * "-" + "+")

	for m in range(len(ingredients)):
		grocery = ingredients[m]["name"]
		cooling = str(ingredients[m]["needs_cooling"])
		in_stock = str(ingredients[m]["in_stock"])
		if cooling == "True":
			cooling = "Yes"
		else:
			cooling = "No"
		if in_stock == "0":
			instock = "-"

		print("| " + grocery + " " * (length - len(grocery) - 1) + "| " + cooling + (14 - len(cooling)) * " " + "| " + in_stock + (9 - len(in_stock)) * " " + "|")

		print("+" + length * "-" + "+" + 15 * "-" + "+" + 10 * "-" + "+")
        
printing()