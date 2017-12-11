from fleet import Fleet
from thing import Thing

fleet = Fleet()

element = Thing("Get milk")
element2 = Thing("Remove the obstacles")
element3 = Thing("Stand up")
element3.complete()
element4 = Thing("Eat lunch")
element4.complete()

fleet.add(element)
fleet.add(element2)
fleet.add(element3)
fleet.add(element4)

print(fleet)