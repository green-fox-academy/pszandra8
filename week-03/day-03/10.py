from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

colors = ["red", "orange", "yellow", "green", "blue", "purple", "violet"]


def drawing(x, color):
    for i in colors:
        x -= 20
        canvas.create_rectangle(150 - x, 150 - x, 150 + x, 150 + x, fill = i)

drawing(150, colors)

root.mainloop()