from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def drawing(x):
    for i in range(20):
        num = 15
        num += i * 10
        canvas.create_rectangle(num - x, num - x, num + x, num + x, fill = "purple")

drawing(5)

root.mainloop()