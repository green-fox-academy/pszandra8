def factorio(x):
    result = 1
    for element in range(2, x + 1):
        result *= element
    return result

print(factorio(5))