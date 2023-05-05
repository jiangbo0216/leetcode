## mac 使用 python 替代 python3

- https://developer.apple.com/forums/thread/704099
  
Doing the following command

```
xcode-select -p
```

results in

```
/Library/Developer/CommandLineTools
```

Then I took a look at `/Library/Developer/CommandLineTools/usr/bin/` didn't have any `python` binary. However there was a `python3` binary. So I created a symlink and this solved my problem. Following is the command I ran

```
sudo ln -s /Library/Developer/CommandLineTools/usr/bin/python3 /Library/Developer/CommandLineTools/usr/bin/python
```

This created the required `python` binary for xcode and solved the issue.

**So general solution would be to find out where xcode-select is looking for `python` binary and then create a symlink in that location**