class Counter(object):
    value_initial = 0
    def __init__(self, value = 0):
        self.value = int(value)
        Counter.value_initial = value

    def add(self):
        self.value += 1

    def get(self, index = None):
        return self.value
    
    def reset(self):
        self.value = Counter.value_initial

new_object = Counter(100)
new_object.add()
print(new_object.get())
new_object.reset()
print(new_object.get())