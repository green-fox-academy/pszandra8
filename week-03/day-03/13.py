from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def drawing(s):
    for i in range(10):
        y = 0
        y += i * s
        if i % 2 == 0:
            for i in range(5):
                x = 0
                x += i * 2 * s
                canvas.create_rectangle(x + s, y, x + (s * 2), y + s, fill = "white")
                canvas.create_rectangle(x, y, x + s, y + s, fill = "black")
        else:
            for i in range(5):
                x = 0
                x += i * 2 * s
                canvas.create_rectangle(x + s, y, x + (s * 2), y + s, fill = "black")
                canvas.create_rectangle(x, y, x + s, y + s, fill = "white")


drawing(30)

root.mainloop()