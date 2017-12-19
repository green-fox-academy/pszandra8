from tkinter import *
from PIL import ImageTk, Image

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
        self.root = Tk()
        self.canvas = Canvas(self.root, width = "720", height = "720")
        self.canvas.pack()
        self.actual_floor = ""
        self.actual_wall = ""


    def drawer(self):
        floor = Image.open("floor.gif")
        floor_2 = ImageTk.PhotoImage(floor)
        self.actual_floor = floor_2
        wall = Image.open("wall.gif")
        wall_2 = ImageTk.PhotoImage(wall)
        self.actual_wall = wall_2
        for i in range(len(self.area)):
            for j in range(len(self.area[i])):
                y = j * 72
                x = i * 72
                if self.area[j][i] == 0:
                    image = self.canvas.create_image(x, y, anchor = NW, image = self.actual_floor)
                else:
                    image = self.canvas.create_image(x, y, anchor = NW, image = self.actual_wall)
        self.canvas.update()

# class Hero(object):
#     def __init__(self):
#         self.x = 36
#         self.y = 36
#         self.down = PhotoImage(file = "hero-down.gif")

#     def move(self, e):
#         self.up = PhotoImage(file = "hero-up.gif")
#         self.right = PhotoImage(file = "hero-right.gif")
#         self.left = PhotoImage(file = "hero-left.gif")
#         self.down = PhotoImage(file = "hero-down.gif")
#         self.hero = canvas.create_image(self.x, self.y, anchor = NW, image = self.down)
#         if e.move == "Up":
#             if self.y >= 72:
#                y -= 72
#                hero = canvas.create_image(self.x, self.y, anchor = NW, image = self.up)
#             else:
#                 hero = canvas.create_image(self.x, self.y, anchor = NW, image = self.up)

#         elif e.move == "Down":
#             if self.y <= 720:
#                 y += 72
#                 hero = canvas.create_image(self.x, self.y + 72, anchor = NW, image = self.down)
#             else:
#                 hero = canvas.create_image(self.x, self.y + 72, anchor = NW, image = self.down)

#         elif e.move == "Left":
#             if self.x >= 72:
#                 x -= 72
#                 hero = canvas.create_image(self.x, self.y, anchor = NW, image = self.left)
#             else:
#                 hero = canvas.create_image(self.x, self.y, anchor = NW, image = self.left)

#         elif e.move == "Right":
#             if self.x <= 720:
#                 x += 72
#                 hero = canvas.create_image(self.x, self.y, anchor = NW, image = self.right)
#             else:
#                 hero = canvas.create_image(self.x, self.y, anchor = NW, image = self.right)
#          self.canvas.update()

map = Map()
#hero = Hero()
map.drawer()
#canvas.bind("<KeyPress>", hero.move)
#canvas.focus_set()
map.root.mainloop()