from tkinter import *

root = Tk()
canvas = Canvas(root, width = "720", height = "720")

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
        self.floor = PhotoImage(file = "floor.gif")
        self.wall = PhotoImage(file = "wall.gif")

    def drawer(self):
        for i in range(len(self.area)):
            for j in range(len(self.area[i])):
                y = j * 72
                x = i * 72
                if self.area[j][i] == 0:
                    image = canvas.create_image(x, y, anchor = NW, image = self.floor)
                else:
                    image = canvas.create_image(x, y, anchor = NW, image = self.wall)

class Hero(object):
    def __init__(self, canvas):
        self.hx = 0
        self.hy = 0
        self.canvas = canvas
        self.down = PhotoImage(file = "hero-down.gif")
        self.up = PhotoImage(file = "hero-up.gif")
        self.right = PhotoImage(file = "hero-right.gif")
        self.left = PhotoImage(file = "hero-left.gif")

    def move_up(self):
        self.canvas.create_image(self.hx, self.hy, anchor = NW, image = self.up)

    def move_right(self):
        self.canvas.create_image(self.hx, self.hy, anchor = NW, image = self.right)
    
    def move_left(self):
        self.canvas.create_image(self.hx, self.hy, anchor = NW, image = self.left)

    def move_down(self):
        canvas.create_image(self.hx, self.hy, anchor = NW, image = self.down)

map = Map()
map.drawer()

hero = Hero(canvas)
hero.move_down()

def move(e):
    if e.keysym == "Up":
        if hero.hy >= 72:
            map.drawer()
            hero.hy -= 72
            hero.move_up()
        else:
            map.drawer()
            hero.move_up()

    elif e.keysym == "Down":
        if hero.hy <= 640:
            map.drawer()
            hero.hy += 72
            hero.move_down()  
        else:
            map.drawer()
            hero.move_down()
    elif e.keysym == "Left":
        if hero.hx >= 72:
            map.drawer()
            hero.hx -= 72
            hero.move_left()
        else:
            map.drawer()
            hero.move_left()

    elif e.keysym == "Right":
        if hero.hx <= 640:
            map.drawer()
            hero.hx += 72
            hero.move_right()
        else:
            map.drawer()
            hero.move_right()

canvas.bind("<KeyPress>", move)
canvas.pack()
canvas.focus_set()
root.mainloop()