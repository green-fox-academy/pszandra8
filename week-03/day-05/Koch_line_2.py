from tkinter import *

root = Tk()

SIZE = 300

canvas = Canvas(root, width=SIZE, height=SIZE, bg = "black")
canvas.pack()

def drawing(x, y, depth):
    if depth > 0:
        canvas.create_line(0, y // 2, x, y // 2, fill = "white")

        canvas.create_line(x // 3, y // 3, x // 3 * 2, y // 3 * 2, fill = "white") 
        drawing(x // 2, y // 2, depth - 1)

drawing(300, 300, 5)

root.mainloop()