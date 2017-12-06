from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def drawing(x, y):
    for i in range(15):
        x += 20
        y += 20
        canvas.create_line(x, 0, 300, y, fill = "purple")
    for i in range(15):
        x -= 20
        y -= 20
        canvas.create_line(0, y, x, 300, fill = "green")

drawing(0, 0)

root.mainloop()