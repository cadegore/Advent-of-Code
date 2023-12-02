import re

sum1 = 0
sum2 = 0

with open("input.txt", "r") as f:
  strings = f.readlines()

  for string in strings:
    string = string.replace('\n', '')
    string1 = re.sub(r"[a-zA-Z]", "", string)
    string2 = string.replace('one', 'o1e').replace('two', 't2o').replace('three', 't3e').replace('four', 'f4r').replace('five', 'f5e').replace('six', 's6x').replace('seven', 's7n').replace('eight', 'e8t').replace('nine', 'n9e')
    string2 = re.sub(r"[a-zA-Z]", "", string2)

    if (len(string1) == 1):
      string1 = int(string1) * 10 + int(string1)
    elif (len(string1) != 2):
      string1 = int(string1[0]) * 10 + int(string1[-1])
    sum1 += int(string1)

    if (len(string2) == 1):
      string2 = int(string2) * 10 + int(string2)
    elif (len(string2) != 2):
      string2 = int(string2[0]) * 10 + int(string2[-1])
    sum2 += int(string2)
  print(f"sum1 = {sum1}")
  print(f"sum2 = {sum2}")

