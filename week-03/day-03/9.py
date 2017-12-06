from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def drawing(x):
    canvas.create_rectangle(150 - x, 150 - x, 150 + x, 150 + x)

drawing(100)
drawing(75)
drawing(10)

root.mainloop()