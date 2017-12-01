or_text = input("Please enter a string: ")

def search_palindrome(or_text):
    text = []
    for t in or_text:
        text.append(t)
    for i in range(len(text)):
        word = text[i - 1] + text[i] + text[i + 1]
        if word == reversed(word):
            return word
    
print(search_palindrome(or_text))
