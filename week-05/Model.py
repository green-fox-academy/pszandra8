class Tile(object):
    def __init__(self, image, x, y):
        self.image = image
        self.x = x
        self.y = y
        self.access = access

class Wall(Tile):
    def __init__(self, x, y, image):
        super().__init__(self, image, x, y)

    def multiple_wall(self):
        pass


class Floor(Tile):
    def __init__(self, image, x, y, access):
        super().__init__(self, image, x, y)

    def multiple_floor(self):
        pass

