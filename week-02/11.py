a = 3
a += 10

print(a)

b = 100
b -= 7

print(b)

c = 44
c *= 2

print(c)

d = 125
d /= 5

print(d)

e = 8
e *= e

print(e)

f1 = 123
f2 = 345

answer = f1 > f2
print(answer)


g1 = 350
g2 = 200

answer2 = 2 * g2 > g1
print(answer2)


h = 1357988018575474
# tell if it has 11 as a divisor (pras a boolean)

answer3 = h % 11 == 0
print(answer3)

i1 = 10
i2 = 3

answer4 = i1 > i2 * i2 and i1 < i2 ** 3
print(answer4)

j = 1521

answer5 = j % 3 == 0 or j % 5 == 0
print(answer5)

k = "Apple"
k *= 4

print(k)