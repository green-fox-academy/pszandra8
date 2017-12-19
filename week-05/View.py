from tkinter import *
import random

root = Tk()
canvas = Canvas(root, width = "720", height = "720")

class Map(object):

    def __init__(self):
        self.floor = PhotoImage(file = "floor.gif")
        self.wall = PhotoImage(file = "wall.gif")
        self.x = 0
        self.y = 0
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
        for i in range(len(self.area)):
            for j in range(len(self.area[i])):
                self.y = j * 72
                self.x = i * 72
                if self.area[j][i] == 0:
                    image = canvas.create_image(self.x, self.y, anchor = NW, image = self.floor)
                else:
                    image = canvas.create_image(self.x, self.y, anchor = NW, image = self.wall)

class Skeleton(object):
    def __init__(self, canvas):
       self.canvas = canvas
       self.sx = random.randint(1, 660)
       self.sy = random.randint(1, 660)
       self.zx = random.randint(1, 660)
       self.zy = random.randint(1, 660)
       self.vx = random.randint(1, 660)
       self.vy = random.randint(1, 660)
       self.skeleton_img = PhotoImage(file = "skeleton.gif")
       
    def drop_skeleton(self):
        self.canvas.create_image(self.sx, self.sy, anchor = NW, image = self.skeleton_img)
        self.canvas.create_image(self.zx, self.zy, anchor = NW, image = self.skeleton_img)
        self.canvas.create_image(self.vx, self.vy, anchor = NW, image = self.skeleton_img)

class Boss(object):
    def __init__(self, canvas):
        self.canvas = canvas
        self.bx = random.randint(1, 660)
        self.by = random.randint(1, 660)
        self.boss_img = PhotoImage(file = "boss.gif")

    def drop_boss(self):
        self.canvas.create_image(self.bx, self.by, anchor = NW, image = self.boss_img)

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

skeleton = Skeleton(canvas)
skeleton.drop_skeleton()

boss = Boss(canvas)
boss.drop_boss()

class Game(object):
    def __init__(self):
        pass

    def move(self, e):
        if e.keysym == "Up":
            if hero.hy >= 72 and self.area[(self.x - 72) // 72][self.y // 72] == 0:
                map.drawer()
                skeleton.drop_skeleton()
                boss.drop_boss()
                hero.hy -= 72
                hero.move_up()
            else:
                map.drawer()
                skeleton.drop_skeleton()
                boss.drop_boss()
                hero.move_up()

        elif e.keysym == "Down":
            if hero.hy <= 640:
                map.drawer()
                skeleton.drop_skeleton()
                boss.drop_boss()
                hero.hy += 72
                hero.move_down()  
            else:
                map.drawer()
                boss.drop_boss()
                skeleton.drop_skeleton()
                hero.move_down()
        elif e.keysym == "Left":
            if hero.hx >= 72:
                map.drawer()
                skeleton.drop_skeleton()
                boss.drop_boss()
                hero.hx -= 72
                hero.move_left()
            else:
                map.drawer()
                skeleton.drop_skeleton()
                boss.drop_boss()
                hero.move_left()

        elif e.keysym == "Right":
            if hero.hx <= 640:
                map.drawer()
                skeleton.drop_skeleton()
                boss.drop_boss()
                hero.hx += 72
                hero.move_right()
            else:
                map.drawer()
                skeleton.drop_skeleton()
                boss.drop_boss()
                hero.move_right()

game = Game()
canvas.bind("<KeyPress>", game.move)
canvas.pack()
canvas.focus_set()
root.mainloop()