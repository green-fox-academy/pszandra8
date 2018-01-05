from tkinter import *

root = Tk()

SIZE = 600

canvas = Canvas(root, width=SIZE, height=SIZE, bg = "yellow")
canvas.pack()

def drawing(x, y, depth, n, m):
    if depth > 0:
        canvas.create_line(x / 3 + n, 0, x / 3 + n, y)
        canvas.create_line(x / 3 * 2 + n, 0, x / 3 * 2 + n, y)
        canvas.create_line(0, y / 3 + m, x, y / 3 + m)
        canvas.create_line(0, y / 3 * 2 + m, x, y / 3 * 2 + m)

        canvas.create_line(x / 3 + n, y / 3, x / 3 * 2 + n, y / 3)
        drawing(x // 3, y // 3, depth - 1, n + x // 3, m + y // 3)

drawing(600, 600, 5, 0, 0)

root.mainloop()