
floor = 0
position = 0

with open("input.txt", "r") as f:
    character = f.read(1);
    while character != "":
        if character == "(":
            floor += 1
        elif character == ")":
            floor -= 1
        character = f.read(1)
        position += 1
        if floor == -1:
            break


print('floor', floor)
print('position', position)