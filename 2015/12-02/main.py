
square_feet = 0
total_ribbon = 0


with open("input.txt", 'r') as f:
    lines = f.readlines()

    for line in lines:
        line = line.replace('\n', '').split('x')
        l = int(line[0])
        w = int(line[1])
        h = int(line[2])
        square_feet += 2*l*w + 2*w*h + 2*h*l + min(l*w, w*h, h*l)
        total_ribbon += min(2*l+2*w, 2*w+2*h, 2*h+2*l) + l*w*h

print('total square feet: ', square_feet)
print('total ribbon: ', total_ribbon)