---
path: '/blog/how-a-web-developer-uses-storage-in-the-browser'
title: 'How a web developer uses storage in the browser'
date: 2019-03-12T16:39:15.311Z
image: '/blog/default.png'
featured: true
draft: true
---

#The Web Storage API

So while researching about this topic, which was requested by a friend of mine, I realized these two ways to store information are based on a central repo called web storage API.

This API provides the browser with a reasonable mechanism to store key-value pairs as described by MDN.

> The Web Storage API provides mechanisms by which browsers can store key/value pairs, in a much more intuitive fashion than using cookies.

## Window.localStorage

This mechanism is read-only and allows us developers to access a Storage object for the Document’s origin; the stored data is saved across browser sessions, this data stored has no expiration time, it gets cleared when the page session ends -- that is, when the page is closed.

### Syntax
```
const myStorage = window.localStorage;
```

Example
This following piece of code accesses the current domain’s local Storage object and adds a data item to it using Storage.setItem().

localStorage.setItem(“myFavoriteBook”, “Thr3s”);

In order for you to read it, you can do it as follows:

let book = localStorage.getItem(“myFavoriteBook”);

Now, if you want to remove that item, you do it as follows:

localStorage.removeItem(“myFavoriteBook”);

We also have a way to clear all the localStorage items like so:

localStorage.clear();

You can see the browser compatibiliy in this link: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage#Browser_compatibility

Window.sessionStorage
Storage has another mechanism to store information into a current domain, this is sessionStorage, this property allows you to access a session Storage object to the current origin. A page session lasts for as long as the browser is open and survives over page reloads and restores. Opening a page in a new tab or window will cause a new session to be initiated with the value of the top-level browsing context, which differs from how session cookies work.

Syntax
const myStorage = window.sessionStorage;


Example
let data = sessionStorage.setItem(“myFavoriteAuthor”, “Ted Dekker”);

In order for you to read it, you can do it as follows:

let author = sessionStorage.getItem(“myFavoriteAuthor”);

Now, if you want to remove that item, you do it as follows:

sessionStorage.removeItem(“myFavoriteAuthor”);

We also have a way to clear all the sessionStorage items like so:

sessionStorage.clear();

Issues Web Storage API solve
The data is saved locally only and can not be read by the server, which eliminates any security issue that cookies present.

It allows for much more data to be saved (up to 10Mb for most browsers).

It is simpler to use and the syntax is very straightforward and memorable.