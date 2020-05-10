---
path: '/blog/how-to-exit-node-terminal'
title: '🔥 How to exit node terminal'
date: 2020-04-27T15:56:57.061Z
image: './images/phil-botha-20VfF_v0GZY-unsplash.jpg'
featured: true
draft: false
thanks: 'Photo by Phil Botha on Unsplash'
reading_time: '44 sec'
---

## What to do?

Well, have you ever been in the position to run JavaScript and you do not
want to open the console developer and then run `node` on your terminal
(because you had it open anyways), run the code you wanted and then you start
trying to escape that prison, well this is my history when I tried to do it.

```bash
➜ node
> const d = new Date()
undefined
> d.now()
Thrown:
TypeError: d.now is not a function
> d
2020-04-27T16:45:45.723Z
> exit
Thrown:
ReferenceError: exit is not defined
> exit()
Thrown:
ReferenceError: exit is not defined
> /q
Thrown:
/q
^

SyntaxError: Invalid regular expression: missing /
> /exit
Thrown:
/exit
^

SyntaxError: Invalid regular expression: missing /
> .exit
```

There you go, you can exit node console by doing one of the following:

- `.exit` 👈 this is is pretty cool
- `process.exit()`
- `process.kill(process.pid)`
  - You can also run `process.kill(process.pid, 'SIGTERM')`, this is to send
  the signal to the process you can capture that signal and do something about it
- Press Ctrl + C twice
