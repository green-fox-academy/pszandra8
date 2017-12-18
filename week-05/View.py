from tkinter import *

root = Tk()
canvas = Canvas(root, width = "720", height = "720")
canvas.pack()

class Draw(object):
    def __init__(self):
        pass

    def draw_tile(self, img):
        x = 0
        y = 0
        for i in range(11):
            for i in range(11):
                image = canvas.create_image(x, y, anchor = NE, image = img)
                x += 72
            y += 72
            x = 0

draw = Draw()
draw.draw_tile(floor)
root.mainloop()