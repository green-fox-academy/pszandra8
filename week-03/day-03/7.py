from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

canvas.create_rectangle(90, 90, 210, 210, fill = "yellow")
canvas.create_rectangle(110, 110, 190, 190, fill = "red")
canvas.create_rectangle(130, 130, 170, 170, fill = "green")
canvas.create_rectangle(145, 145, 155, 155, fill = "gold")

root.mainloop()