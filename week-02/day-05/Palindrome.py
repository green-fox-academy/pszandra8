text = "greenfox"

def create_palindrome(text):
        result = text + text[::-1]
        return(result)

print(create_palindrome(text))