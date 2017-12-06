
from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# divide the canvas into 4 equal parts
# and repeat this pattern in each quarter:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/line-play/r1.png]

def drawing(x, y):
    for i in range(15):
        x += 10
        y += 10
        canvas.create_line(x, 0, 150, y, fill = "purple")
    for i in range(15):
        x -= 10
        y -= 10
        canvas.create_line(0, y, x, 150, fill = "green")

def drawing2(x, y):
    for i in range(15):
        x += 10
        y += 10
        canvas.create_line(150 + x, 0, 300, y, fill = "purple")
    for i in range(15):
        x -= 10
        y -= 10
        canvas.create_line(150, y, 150 + x, 150, fill = "green")

def drawing3(x, y):
    for i in range(15):
        x += 10
        y += 10
        canvas.create_line(x, 150, 150, 150 + y, fill = "purple")
    for i in range(15):
        x -= 10
        y -= 10
        canvas.create_line(0, 150 + y, x, 300, fill = "green")

def drawing4(x, y):
    for i in range(15):
        x += 10
        y += 10
        canvas.create_line(150 + x, 150, 300, 150 + y, fill = "purple")
    for i in range(15):
        x -= 10
        y -= 10
        canvas.create_line(150, 150 + y, 150 + x, 300, fill = "green")

drawing(0, 0)
drawing2(0, 0)
drawing3(0, 0)
drawing4(0, 0)

root.mainloop()