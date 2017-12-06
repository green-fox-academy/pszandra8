from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def drawing(x, y):
    for i in range(15):
        x -= 10
        y += 10
        canvas.create_line(150, y, x, 150, fill = "green")

def drawing2(x, y):
    for i in range(15):
        x += 10
        y += 10
        canvas.create_line(150, y, 150 + x, 150, fill = "green")

def drawing3(x, y):
    for i in range(15):
        x += 10
        y += 10
        canvas.create_line(x, 150, 150, 150 + y, fill = "green")

def drawing4(x, y):
    for i in range(15):
        x += 10
        y -= 10
        canvas.create_line(x, 150 + y, 150 + x, y, fill = "green")

drawing(150, 0)
drawing2(0, 0)
drawing3(0, 0)
drawing4(150, 300)

root.mainloop()