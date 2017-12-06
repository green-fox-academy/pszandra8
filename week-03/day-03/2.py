from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

canvas.create_line(10, 10, 290, 10, fill = "red")
canvas.create_line(290, 10, 290, 290, fill = "green")
canvas.create_line(10, 290, 290, 290, fill = "blue")
canvas.create_line(10, 290, 10, 10, fill = "purple")

root.mainloop()
