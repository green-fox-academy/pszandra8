class Plant(object):

    def __init__(self, collect = []):
        self.collect = collect

    def add_plant(self, plant):
        self.collect.append(plant)

    def watering(self, water):
        print("Watering with " + str(water))
        count = 0
        for i in self.collect:
            if i.plant_type == "flower" and i.water_level <= 5:
               count += 1
            if i.plant_type == "tree" and i.water_level <= 10:
                count += 1
        water /= count
        for i in self.collect:
            if i.plant_type == "flower" and i.water_level <= 5:
                i.water_level += water * 0.75
            if i.plant_type == "tree" and i.water_level <= 10:
                i.water_level += water * 0.4
        
class Flowers():
    def __init__(self, color, water_level, plant_type = "flower"):
        self.color = color
        self.water_level = water_level
        self.plant_type = plant_type

    def status(self):
        if self.water_level <= 5:
            print("The " + self.color + " " + self.plant_type + " needs water")
        else:
            print("The " + self.color + " " + self.plant_type + " doesn't need water")

class Trees():
    def __init__(self, color, water_level, plant_type = "tree"):
        self.color = color
        self.water_level = water_level
        self.plant_type = plant_type

    def status(self):
        if self.water_level <= 10:
            print("The " + self.color + " " + self.plant_type + " needs water")
        else:
            print("The " + self.color + " " + self.plant_type + " doesn't need water")

flower_1 = Flowers("yellow", 0)
flower_2 = Flowers("blue", 0)
tree_1 = Trees("purple", 0)
tree_2 = Trees("orange", 0)

garden = Plant()

garden.add_plant(flower_1)
garden.add_plant(flower_2)
garden.add_plant(tree_1)
garden.add_plant(tree_2)

flower_1.status()
flower_2.status()
tree_1.status()
tree_2.status()

garden.watering(40)

flower_1.status()
flower_2.status()
tree_1.status()
tree_2.status()

garden.watering(70)

flower_1.status()
flower_2.status()
tree_1.status()
tree_2.status()