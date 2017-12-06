
from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def drawing(x, y):
    if x <= 250 and y <= 250:
        canvas.create_rectangle(x, y, x + 50, y + 50)
    else:
        canvas.create_rectangle(x, y, x - 50, y - 50)

drawing(10, 10)
drawing(70, 70)
drawing(290, 200)

root.mainloop()