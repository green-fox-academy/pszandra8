import turtle

def koch(t, length, depth):
    if depth == 0:
        t.forward(length)
    else:
        koch(t, length / 3, depth - 1)
        t.left(60)
        koch(t, length / 3, depth - 1)
        t.right(120)
        koch(t, length / 3, depth - 1)
        t.left(60)
        koch(t, length / 3, depth - 1)

koch(turtle, 500, 4)