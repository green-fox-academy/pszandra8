class Post_it(object):
    def __init__(self, background_color, text, text_color):
        self.background_color = background_color
        self.text = text
        self.text_color = text_color

object1 = Post_it("orange", "Idea 1", "blue")
object2 = Post_it("pink", "Awesome", "black")
object3 = Post_it("yellow", "Superb!", "green")

print(object1.background_color)
print(object2.text)
print(object3.text_color)
