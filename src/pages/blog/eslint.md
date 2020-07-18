---
path: '/blog/eslint'
title: 'Eslint fix my mistakes, thank you ✌'
date: 2020-07-16T05:46:07.269Z
image: './images/james-pond-1qkyck-UL3g-unsplash.jpg'
featured: true
draft: false
thanks: 'Photo by James Pond on Unsplash'
reading_time: '1 min 44 sec'
---

## What is it good for?

Well, glad you asked a random person. So eslint is a
> tool for identifying and reporting on patterns found in ECMAScript/JavaScript
> code, with the goal of making code more consistent and avoiding bugs.

It will have mechanisms to scatter on your code looking for possible
mistakes, if found they will be reported and you can decide if you
want to make changes to your code to make it possibly more consistent, and you
might also avoid common, recognized bugs along the way. So you have a robot at
your disposal telling you "hey, look at this line of code; are you okay if this
one goes to production the way it is?".

We have been abusing on eslint because it is my opinion, the tool is not made
to make your code bulletproof, the tool is good to look at your code for
patterns in the form of rules that the developer (you) have set up on your (maybe
not exactly your) project. These premises do not mean the fact that your code
pass all the rules said code is not carrying bugs.

## Should I use it on my project?

I believe it is a good idea because it gives you confidence that with the
the correct set of rules your code and your project is at least not making any
common mistakes that can be resolved by an active watcher at your disposal.

Setting up the tooling on your local machine will take you to a ride for a
learning curve where you will face how to use NodeJS and these packages for your
advantage.

One thing to take into consideration are the rules, many tutorials out there
will ask you to use plugins with preset rules which are handy because
you do not need to write down all these rules but with one command on your
terminal plus one line of code in your configuration is enough to have eslint
up and running.

I am going to show you what I am talking about.

```bash
$ npm install eslint --save-dev
.
.
.
$ npm install eslint-plugin-react --save-dev
```

These two commands are just installing the package `eslint` and
`eslint-plugin-react` into your `devDependencies` section on your `package.json`
file.

```json
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ]
```

These two lines of code are telling eslint that you want to use the set of rules
named `eslint:recommended` and `plugin:react/recommended`. 🔥 _The order_ is
important so keep that in mind.

Have you ever gone into the package and see what these rules are?
- [eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js)
- [plugin:react/recommended](https://github.com/yannickcr/eslint-plugin-react/blob/master/index.js)
