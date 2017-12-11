class Sharpie(object):
    def __init__(self, color, width, ink_amount = 100.0):
        self.color = str(color)
        self.width = float(width)
        self.ink_amount = ink_amount

    def use(self):
        self.ink_amount -= 1

new_sharpie = Sharpie("pink", 10)
new_sharpie.use()
print(new_sharpie.ink_amount)