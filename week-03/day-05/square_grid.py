from tkinter import *

root = Tk()

size = 350

canvas = Canvas(root, width = size, height = size)
canvas.pack()

x = 80
y = 80
n = 255
m = 255
border = 10
depth = 5

def square(x, y, n, m, border, depth):
    if depth > 0:
        canvas.create_rectangle(x, y, n, m, width = border)
        square(x // 2, y // 2, n // 2, m // 2, border // 2, depth - 1)

def square2(x, y, n, m, border, depth):
    if depth > 0:
        canvas.create_rectangle(x, y, n, m, width = border // 2)
        square(x // 2, size // 8 * 5, n // 2, size // 8 * 7, border // 2, depth - 1)

def square3(border, depth):
    if depth > 0:
       canvas.create_rectangle(220, y // 2, 306, m // 2, width = border // 2)

def square4(border, depth):
    if depth > 0:
       canvas.create_rectangle(220, size // 8 * 5, 306, size // 8 * 7, width = border // 2)

square(x, y, n, m, border, depth)
square2(x, y, n, m, border, depth)
square3(border, depth)
square4(border, depth)

root.mainloop()