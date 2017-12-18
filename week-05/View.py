from tkinter import *

root = Tk()
canvas = Canvas(root, width = "720", height = "720")
canvas.pack()

tile = PhotoImage(file = "floor.gif")

def draw_row(x, y):
    for i in range(11):
        for i in range(11):
            image = canvas.create_image(x, y, anchor = NE, image = tile)
            x += 72
        y += 72
        x = 0

draw_row(0, 0)
root.mainloop()