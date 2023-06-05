class E1:
    def __bool__(a):
        return False


class E2:
    def __len__(a):
        return 0


values = [False, None, 0, 0.0, '',
          [], {}, (), 'hello', [1, 2, 3], E1(), E2()]

for value in values:
    if value:
        print(f'{value} is truthy')
    else:
        print(f'{value} is falsy')
