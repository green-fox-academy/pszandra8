n = [0, 0, 0, 0]
for i in range(0, len(n)):
    n[i] = 1
    n[i-1] = 0
    print(*n, sep=' ')