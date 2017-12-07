def suming_digits(number):
        if number < 10:
            return number
        else:
            return number % 10 + suming_digits(number // 10)

print(suming_digits(126))
