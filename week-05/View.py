from tkinter import *

class Map(object):

    def __init__(self):
        self.area = [
        [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 1, 0, 1, 1, 0],
        [0, 1, 1, 1, 0, 1, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 1, 1, 0, 1, 0]]

    def drawer(self):
        root = Tk()
        canvas = Canvas(root, width = "720", height = "720")
        canvas.pack()
        floor = PhotoImage(file = "floor.gif")
        wall = PhotoImage(file = "wall.gif")
        down = PhotoImage(file = "hero-down.gif")
        for i in range(len(self.area)):
            for j in range(len(self.area[i])):
                y = j * 72
                x = i * 72
                if self.area[j][i] == 0:
                    image = canvas.create_image(x, y, anchor = NW, image = floor)
                else:
                    image = canvas.create_image(x, y, anchor = NW, image = wall)

        image = canvas.create_image(0, 0, anchor = NW, image = down)

        root.mainloop()

map = Map()
map.drawer()