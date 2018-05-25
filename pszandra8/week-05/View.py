try:
    from tkinter import *
except ImportError:
    from Tkinter import *
import random

root = Tk()
size = 72
canvas = Canvas(root, width = size * 10, height = size * 10)
counter = 0

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
            [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 1, 1, 0, 1, 0]]

    def drawer(self):
        for i in range(len(self.area)):
            for j in range(len(self.area[i])):
                self.y = j * size
                self.x = i * size
                if self.area[j][i] == 0:
                    image = canvas.create_image(self.x, self.y, anchor = NW, image = self.floor)
                else:
                    image = canvas.create_image(self.x, self.y, anchor = NW, image = self.wall)

map = Map()    

class Skeleton(object):
    global counter
    def __init__(self, canvas):
        self.canvas = canvas
        self.d6 = random.randint(1, 6) 
        self.position = [0, 72, 144, 216, 288, 360, 432, 504, 576, 648]
        self.sx = random.choice(self.position)
        self.sy = random.choice(self.position)
        self.HP = 2 * self.d6 + self.d6
        self.DP = 3 // 2 * self.d6
        self.SP = self.d6
        self.skeleton_img = PhotoImage(file = "skeleton.gif")

    # def drop_skeleton(self):
    #     if map.area[self.sy // 72][self.sx // 72] == 0 and self.sx != 0 and self.sy != 0:
    #         self.canvas.create_image(self.sx, self.sy, anchor = NW, image = self.skeleton_img)
    #     else:
    #         self.sx = random.choice(self.position)
    #         self.sy = random.choice(self.position)
    #         self.drop_skeleton()

    def draw_skeleton(self):
        self.canvas.create_image(self.sx, self.sy, anchor = NW, image = self.skeleton_img)

    def skeleton_mover(self):
        if counter % 2 == 0:
            if self.sy >= size and map.area[(self.sy - size) // size][self.sx // size] == 0:
                self.sy -= size
                self.draw_skeleton()
            elif self.sy <= 640 and map.area[(self.sy + size) // size][self.sx // size] == 0:
                self.sy += size
                self.draw_skeleton()
            elif self.sy >= size and map.area[self.sy // size][(self.sx - size) // size] == 0:
                self.sx -= size
                self.draw_skeleton()
            elif self.sy <= 640 and map.area[self.sy // size][(self.sx + size) // size] == 0:
                self.sx += size
                self.draw_skeleton()
        else:
            self.draw_skeleton()

class Boss(object):
    def __init__(self, canvas):
        self.canvas = canvas
        self.d6 = random.randint(1, 6) 
        self.position = [0, 72, 144, 216, 288, 360, 432, 504, 576, 648]
        self.bx = random.choice(self.position)
        self.by = random.choice(self.position)
        self.boss_img = PhotoImage(file = "boss.gif")
        self.HP = (2 * 3 * self.d6) + self.d6
        self.DP = 3 // 2 * self.d6 + (self.d6 // 2)
        self.SP = 3 * self.d6

    # def drop_boss(self):
    #     if map.area[self.by // 72][self.bx // 72] == 0 and self.by != 0 and self.bx != 0:
    #         self.canvas.create_image(self.bx, self.by, anchor = NW, image = self.boss_img)
    #     else:
    #         self.bx = random.choice(self.position)
    #         self.by = random.choice(self.position)
    #         self.drop_boss()

    def draw_boss(self):
        self.canvas.create_image(self.bx, self.by, anchor = NW, image = self.boss_img)

    def boss_mover(self):
        if counter % 2 == 0:
            if self.by >= 72 and map.area[(self.by - 72) // 72][self.bx // 72] == 0:
                self.by -= 72
                self.draw_boss()
            elif self.by <= 630 and map.area[(self.by + 72) // 72][self.bx // 72] == 0:
                self.by += 72
                self.draw_boss()
            elif self.by >= 72 and map.area[self.by // 72][(self.bx - 72) // 72] == 0:
                self.bx -= 72
                self.draw_boss()
            elif self.by <= 640 and map.area[self.by // 72][(self.bx + 72) // 72] == 0:
                self.bx += 72
                self.draw_boss()
        else:
            self.draw_boss()

class Hero(object):
    def __init__(self, canvas):
        self.canvas = canvas
        self.d6 = random.randint(1, 6) 
        self.hx = 0
        self.hy = 0
        self.down = PhotoImage(file = "hero-down.gif")
        self.up = PhotoImage(file = "hero-up.gif")
        self.right = PhotoImage(file = "hero-right.gif")
        self.left = PhotoImage(file = "hero-left.gif")
        self.level = 1
        self.HP = 20 + 3 * self.d6
        self.HP_current = 20 + 3 * self.d6
        self.DP = 2 * self.d6
        self.SP = 5 + self.d6

    def move_up(self):
        self.canvas.create_image(self.hx, self.hy, anchor = NW, image = self.up)

    def move_right(self):
        self.canvas.create_image(self.hx, self.hy, anchor = NW, image = self.right)
    
    def move_left(self):
        self.canvas.create_image(self.hx, self.hy, anchor = NW, image = self.left)

    def move_down(self):
        canvas.create_image(self.hx, self.hy, anchor = NW, image = self.down)

    def level_up(self):
        self.level += 1
        self.hp += randint(1, 6)
        self.dp += randint(1, 6)
        self.sp += randint(1, 6)

map.drawer()

hero = Hero(canvas)
hero.move_down()

skeleton1 = Skeleton(canvas)
skeleton2 = Skeleton(canvas)
skeleton3 = Skeleton(canvas)

skeleton1.skeleton_mover()
skeleton2.skeleton_mover()
skeleton3.skeleton_mover()

boss = Boss(canvas)
boss.boss_mover()

class Game(object):
    def __init__(self):
        pass

    def move(self, e):
        global counter
        if e.keysym == "Up":
            counter += 1
            if hero.hy >= 72 and map.area[(hero.hy - 72) // 72][hero.hx // 72] == 0:
                map.drawer()
                hero.hy -= 72
                hero.move_up()
            else:
                map.drawer()
                hero.move_up()

        elif e.keysym == "Down":
            counter += 1
            if hero.hy <= 640 and map.area[(hero.hy + 72) // 72][hero.hx // 72] == 0:
                map.drawer()
                hero.hy += 72
                hero.move_down()  
            else:
                map.drawer()
                hero.move_down()
        elif e.keysym == "Left":
            counter += 1
            if hero.hx >= 72 and map.area[hero.hy // 72][(hero.hx - 72) // 72] == 0:
                map.drawer()
                hero.hx -= 72
                hero.move_left()
            else:
                map.drawer()
                hero.move_left()

        elif e.keysym == "Right":
            counter += 1
            if hero.hx <= 640 and map.area[hero.hy // 72][(hero.hx + 72) // 72] == 0:
                map.drawer()
                hero.hx += 72
                hero.move_right()
            else:
                map.drawer()
                hero.move_right()

        skeleton1.skeleton_mover()
        skeleton2.skeleton_mover()
        skeleton3.skeleton_mover() 
        boss.boss_mover()

        if e.keysym == "Escape":
            canvas.create_rectangle(0, 0, 720, 760, fill = "white")
            canvas.create_text(355, 380, font = "Comic 50 italic", text = "Thanks for playing!\n  Come again, bye")

        if e.keysym == "space":
            if hero.hy == skeleton1.sy and hero.hx == skeleton1.sx:
                skeleton1.HP -= 1
                hero.HP_current -= 1
            elif hero.hy == skeleton2.sy and hero.hx == skeleton2.sx:
                skeleton2.HP -= 1
                hero.HP_current -= 1
            elif hero.hy == skeleton2.sy and hero.hx == skeleton2.sx:
                skeleton3.HP -= 1
                hero.HP_current -= 1
            elif hero.hy == boss.by and hero.hx == boss.bx:
                boss.HP -= 1
                hero.HP_current -= 1

class Status(object):
    def __init__(self):
        canvas.create_text(210, 740, text = "Hero (Level " + str(hero.level) + ")")
        canvas.create_text(315, 740, text = "Hero HP " + str(hero.HP) + "/" + str(hero.HP_current))
        canvas.create_text(415, 740, text = "Hero DP " + str(hero.DP))
        canvas.create_text(515, 740, text = "Hero SP " + str(hero.SP))

status = Status()
game = Game()
canvas.bind("<KeyPress>", game.move)
canvas.focus_set()
root.mainloop()