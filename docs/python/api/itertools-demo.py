import itertools

colors = ['red', 'green', 'blue']
sizes = ['small', 'medium', 'large']

combinations = list(itertools.product(colors, sizes))

print(combinations)
