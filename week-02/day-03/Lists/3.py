verbs = ["megy", "ver", "kapcsol", "rak", "néz"]
preverb = "be"

def create_new_verbs():
    new_verbs = []
    for i in verbs:
        new_verbs.append(preverb + i)
    print(new_verbs)

create_new_verbs()