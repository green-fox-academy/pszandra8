class Tile(object):
    def __init__(self, x, y, access, image):
        self.image = image
        self.x = x
        self.y = y
        self.access = access

class Floor(Tile):
    def __init__(self, x, y, access, image):
        super().__init__(self, image, x, y, True, floor = PhotoImage(file = "floor.gif"))

class Wall(Tile):
    def __init__(self, x, y, access, image):
        super().__init__(self, image, x, y, False, wall = PhotoImage(file = "wall.gif"))

class Character(object):
    def __init__(self, x, y, image):
        self.x = x
        self.y = y
        self.image = image

class Hero(Character):
    def __init__(self, x = 0, y = 0, image):
        super().__init__(self, image, x, y, image)