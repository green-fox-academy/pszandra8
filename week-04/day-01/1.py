class PostIt(object):
    def __init__(self, background_color, text, text_color):
        self.background_color = background_color
        self.text = text
        self.text_color = text_color

object1 = PostIt("orange", "Idea 1", "blue")
object2 = PostIt("pink", "Awesome", "black")
object3 = PostIt("yellow", "Superb!", "green")

print(object1.background_color)
print(object2.text)
print(object3.text_color)