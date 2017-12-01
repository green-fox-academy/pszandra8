def is_anagram(one, two):
    if one == two[::-1]:
        return("true")
    else:
        return("false")

print(is_anagram("dog", "god"))