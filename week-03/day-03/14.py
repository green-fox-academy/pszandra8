from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def drawing(x, y):
    for i in range(15):
        x += 20
        canvas.create_line(x, y, 150, 150)
    for i in range(15):
        y += 20
        canvas.create_line(x, y, 150, 150)
    for i in range(15):
        x -= 20
        canvas.create_line(150, 150, x, y)
    for i in range(15):
        y -= 20
        canvas.create_line(150, 150, x, y)

drawing(2, 2)

root.mainloop()