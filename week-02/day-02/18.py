# - Create a variable named `ai`
#   with the following content: `[3, 4, 5, 6, 7]`
# - Print the sum of the elements in `ai`

ai = [3, 4, 5, 6, 7]
result = 0
n = len(ai)
for i in range(n):
    result += ai[n-i]

print(ai) 