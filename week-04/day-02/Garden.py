class Plant(object):

    def __init__(self, plant, color, collect = []):
        self.plant = plant
        self.color = color
        self.collect = collect

    def add_plant(self):
        self.collect.append(self.plant)

    def watering(self, water):
        print("Watering with " + str(water))
        count = 0
        for i in range(len(self.collect)):
            if self.collect[i] == "flower" and self.water_level <= 5:
               count += 1
            elif self.collect[i] == "tree" and self.water_level <= 10:
                count += 1
            water /= count
            for n in range(len(self.collect)):
                if self.collect[n] == "flower" and self.water_level <= 5:
                    self.water_level += 0.75 * water
                elif self.collect[n] == "tree" and self.water_level <= 10:
                    self.water_level += 0.4 * water

class Flowers(Plant):
    def __init__(self, plant, color, water_level):
        super().__init__(plant, color)
        self.water_level = water_level

    def cal_need(self):
        if self.water_level <= 5:
            print("The " + self.color + " " + self.plant + " needs water")
        else:
            print("The " + self.color + " " + self.plant + " doesn't need water")

class Trees(Plant):
    def __init__(self, plant, color, water_level):
        super().__init__(plant, color)
        self.water_level = water_level

    def cal_need(self):
        if self.water_level <= 10:
            print("The " + self.color + " " + self.plant + " needs water")
        else:
            print("The " + self.color + " " + self.plant + " doesn't need water")

flower_1 = Flowers("flower", "yellow", 0)
flower_2 = Flowers("flower", "blue", 0)

tree_1 = Trees("tree", "purple", 0)
tree_2 = Trees("tree", "orange", 0)

flower_1.add_plant()
flower_2.add_plant()
tree_1.add_plant()
tree_2.add_plant()

flower_1.cal_need()
flower_2.cal_need()
tree_1.cal_need()
tree_2.cal_need()

flower_1.watering(40)
flower_2.watering(40)
tree_1.watering(40)
tree_2.watering(40)

flower_1.cal_need()
flower_2.cal_need()
tree_1.cal_need()
tree_2.cal_need()