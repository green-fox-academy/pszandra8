class Summa(object):
    def summa(self, numbers = []):
        number_count = 0
        for number in numbers:
            number_count += number
        return number_count