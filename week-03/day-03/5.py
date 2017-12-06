from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def drawing(x, y):
    if x <= 250:
        canvas.create_line(x, y, x + 50, y)
    else:
        canvas.create_line(x, y, x - 50, y)

drawing(10, 10)
drawing(290, 290)
drawing(30, 50)

root.mainloop()