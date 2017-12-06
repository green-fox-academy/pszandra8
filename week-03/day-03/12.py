from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def drawing(x):
    for i in range(10):
        num = 0
        x *= 2
        num += x
        canvas.create_rectangle(num, num, num + x, num + x, fill = "purple")


drawing(5)

root.mainloop()