class BlogPost(object):
  def __init__(self, author_name, title, publication_date):
    self.author_name = author_name
    self.title = title
    self.publication_date = publication_date

  def printeringer(self):
    print(self.author_name + " " + self.title + " " + self.publication_date)

first = BlogPost("John Doe", "Something as title", "1991")
second = BlogPost("KKK", "Something", "\'90")

first.printeringer()
second.printeringer()