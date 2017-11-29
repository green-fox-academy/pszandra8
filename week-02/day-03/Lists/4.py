shop_items = ["Cupcake", 2, "Brownie", False]

for i in shop_items:
    if shop_items[i] == 2:
        shop_items[i] = "Croissant"
    elif shop_items[i] == False:
        shop_items[i] = "Ice cream"

print(shop_items)