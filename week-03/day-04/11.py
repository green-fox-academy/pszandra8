from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600', bg = "yellow")
canvas.pack()

def drawing(x, y, depth):
    if depth > 0:
        canvas.create_line(x / 3, 0, x / 3, y)
        canvas.create_line(x / 3 * 2, 0, x / 3 * 2, y)
        canvas.create_line(0, x / 3, x, y / 3)
        canvas.create_line(0, x / 3 * 2, x, y / 3 * 2)
        drawing(x // 3, y // 3, depth - 1)

drawing(600, 600, 4)

root.mainloop()