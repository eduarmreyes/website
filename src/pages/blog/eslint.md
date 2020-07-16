---
path: '/blog/eslint'
title: 'Eslint fix my mistakes, thank you ✌'
date: 2020-07-16T05:46:07.269Z
image: './images/'
featured: true
draft: true
thanks: ''
reading_time: ''
---

## What is it good for?

Well, glad you asked random person. So eslint is a
> tool for identifying and reporting on patterns found in ECMAScript/JavaScript
> code, with the goal of making code more consistent and avoiding bugs.

Basically, it will have mechanisms to scatter on your code looking for possible
mistakes, if found they will be reported and you can take a decision if you
want to make changes to your code to make it possibly more consistent, and you
might also avoid common, recognized bugs along the way. So you have a robot at
your disposal telling you "hey, look at this line of code; are you okay if this
one goes to production the way it is?".

We have been abusing on eslint because, it is my opinion, the tool is not made
to make your code bullet proof, the tool is good to look at your code for
patterns in the form of rules that the developer (you) have setup on your (maybe
not exactly your) project. This premises does not mean the fact that your code
pass all the rules said code is not carrying bugs.

## Should I use it on my project?

I believe it is a good idea, because it gives you confident that with the
correct set of rules your code and your project is at least not making any
common mistakes that can be resolved by an active watcher at your disposal and
your CI/CD tooling.
