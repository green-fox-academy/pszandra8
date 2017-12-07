
# We have a number of bunnies and each bunny has two big floppy ears.
# We want to compute the total number 
# of ears across all the bunnies recursively (without loops or multiplication).

def bunny_ears(bunny):
    if bunny <= 1:
        return 2
    else:
        bunny + bunny_ears(bunny - 1))

bunny(10)