def is_anagram(one, two):
    one_char_list = sorted(one)
    two_char_list = sorted(two)
    if one_char_list == two_char_list:
        return("true")
    else:
        return("false")

print(is_anagram("dog", "god"))