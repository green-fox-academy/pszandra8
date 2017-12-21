class CandyShop(object):
    def __init__(self, sugar):
        self.sugar = sugar
        self.income = income = 0
        self.lollipop_count = 0
        self.candy_count = 0
        self.lollipop_price = 10
        self.candy_price = 20

    def create_sweets(self, sweet):
        if sweet == "lollipop":
            self.lollipop_count += 1
            self.sugar -= 5
        else:
            self.candy_count += 1
            self.sugar -= 10

    def sell(self, sweet, piece):
        if sweet == "lollipop":
            self.income += int(piece) * self.lollipop_price
            self.lollipop_count -= int(piece)
        else:
            self.income += int(piece) * self.candy_price
            self.candy_count -= int(piece)

    def raise_prices(self, percentage):
        self.percentage = int(percentage) / 100 + 1
        self.candy_price *= self.percentage
        self.lollipop_price *= self.percentage
        
    def buy_sugar(self, sugar_amount):
        self.sugar += sugar_amount
        self.price_of_sugar = sugar_amount / 10
        self.income -= self.price_of_sugar

    def __str__(self):
        return "Inventory: " + str(self.candy_count) + " candies, " + str(self.lollipop_count) + " lollipops, " + "income: " + str(self.income) + ", Sugar: " + str(self.sugar) + " gr"


candy_shop = CandyShop(300)
candy_shop.create_sweets("candy")
candy_shop.create_sweets("candy")
candy_shop.create_sweets("lollipop")
candy_shop.create_sweets("lollipop")
print(candy_shop)
candy_shop.sell("candy", 1)
print(candy_shop)
candy_shop.raise_prices(5)
candy_shop.sell("lollipop", 1)
print(candy_shop)
candy_shop.buy_sugar(300)
print(candy_shop)