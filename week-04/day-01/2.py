class Blog_post(object):
    def __init__(self, author_name, title, text, publication_date):
        self.author_name = author_name
        self.title = title
        self.text = text
        self.publication_date = publication_date

object1 = Blog_post("John Doe", "Lorem Ipsum", "Lorem ipsum dolor sit amet.", "2000.05.04")
object2 = Blog_post("Tim Urban", "Wait but why", "A  popular long-form, stick-figure-illustrated blog about almost everything.", "2010.10.10")
object3 = Blog_post("William Turton", "One Engineer Is Trying to Get IBM to Reckon With Trump", "Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.", "2017.03.28")

print(object1.author_name)
print(object2.title)
print(object3.title + " " + object3.publication_date)