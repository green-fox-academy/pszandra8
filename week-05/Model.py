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

class Hero():
    def __init__(self, x = 0, y = 0, down = PhotoImage(file = "hero-down.gif")):
        self.x = x
        self.y = y
        self.down = down

class Hero(object):
    def __init__(self, x = 0, y = 0, down = PhotoImage(file = "hero-down.gif")):
        self.x = x
        self.y = y
        self.down = down