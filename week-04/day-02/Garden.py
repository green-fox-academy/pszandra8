class Plant(object):

    def __init__(self, collect = []):
        self.collect = collect

    def add_plant(self, plant):
        self.collect.append(plant)

    def watering(self, water):
        print("Watering with " + str(water))
        count = 0
        for i in self.collect:
            if i.plant == "flower" and i.water_level <= 5:
               count += 1
            elif i.plant == "tree" and i.water_level <= 10:
                count += 1
            water /= count
        for n in self.collect:
            if n.plant == "flower" and n.water_level <= 5:
                n.water_level += 0.75 * water
            elif n.plant == "tree" and n.water_level <= 10:
                n.water_level += 0.4 * water

class Flowers():
    def __init__(self, plant, color, water_level):
        self.plant = plant
        self.color = color
        self.water_level = water_level

    def cal_need(self):
        if self.water_level <= 5:
            print("The " + self.color + " " + self.plant + " needs water")
        else:
            print("The " + self.color + " " + self.plant + " doesn't need water")

class Trees():
    def __init__(self, plant, color, water_level):
        self.plant = plant
        self.color = color
        self.water_level = water_level

    def cal_need(self):
        if self.water_level <= 10:
            print("The " + self.color + " " + self.plant + " needs water")
        else:
            print("The " + self.color + " " + self.plant + " doesn't need water")

garden = Plant()

flower_1 = Flowers("flower", "yellow", 0)
flower_2 = Flowers("flower", "blue", 0)
tree_1 = Trees("tree", "purple", 0)
tree_2 = Trees("tree", "orange", 0)

garden.add_plant(flower_1)
garden.add_plant(flower_2)
garden.add_plant(tree_1)
garden.add_plant(tree_2)

flower_1.cal_need()
flower_2.cal_need()
tree_1.cal_need()
tree_2.cal_need()

garden.watering(40)

flower_1.cal_need()
flower_2.cal_need()
tree_1.cal_need()
tree_2.cal_need()

garden.watering(70)

flower_1.cal_need()
flower_2.cal_need()
tree_1.cal_need()
tree_2.cal_need()