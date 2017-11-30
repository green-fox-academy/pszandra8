input_list = ["this", "is", "what", "I'm", "searching", "in"]
text = "ching"

def return_index(input_list, text):
    for i in range(len(input_list)):
        if text in input_list[i]:
            return i
    return -1

print(return_index(input_list, text))