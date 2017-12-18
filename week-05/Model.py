from tkinter import *

class Tile(object):
    def __init__(self, x, y, access, image):
        self.image = image
        self.x = x
        self.y = y
        self.access = access

class Wall(Tile):
    def __init__(self, x, y, access, image):
        super().__init__(self, image, x, y, True, floor = PhotoImage(file = "floor.gif"))

    def multiple_wall(self):
        pass


class Floor(Tile):
    def __init__(self, x, y, access, image):
        super().__init__(self, image, x, y, False, wall = PhotoImage(file = "wall.gif"))

    def multiple_floor(self):
        pass

class Map(objcet):
    def __init__(self):
        pass

    def matrix(self):
        area = [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
                [0, 0, 0, 1, 0, 1, 0, 1, 1, 0],
                [0, 1, 1, 1, 0, 1, 0, 1, 1, 0],
                [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                [1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
                [0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
                [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
                [0, 0, 0, 0, 0, 1, 1, 0, 1, 0],
                [0, 0, 0, 1, 0, 1, 1, 0, 1, 0],
                [0, 1, 0, 1, 0, 1, 0, 0, 0, 0]]

map = Map()