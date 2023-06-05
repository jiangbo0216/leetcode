import itertools

phoneMap = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
}

groups = (phoneMap[digit] for digit in '23')

print(["".join(combination) for combination in itertools.product(*groups)])

# ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']