from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def drawing(x, y):
    canvas.create_line(x, y, 150, 150)

drawing(10, 10)
drawing(280, 10)
drawing (48, 30)

root.mainloop()

