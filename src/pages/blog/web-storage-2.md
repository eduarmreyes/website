---
path: '/blog/how-a-web-developer-uses-storage-in-the-browser-part-2'
title: 'How a web developer uses storage in the browser part 2'
date: 2019-03-21T16:39:15.311Z
image: './images/gabriel-sollmann-704393-unsplash.jpg'
featured: true
draft: false
thanks: 'Photo by Gabriel Sollmann on Unsplash'
---

## The Web Storage API Part 2

While sharing a little about The Web Storage API, we checked the Chrome Developer Console and
found out that there are some other options to store data in your browser.

- IndexedDB
- Web SQL

In this article we will cover the research done to understand these two other options to store
data using our browser.

### IndexedDB

There are times when developers need to store rather large amount of structured data such as
files/blobs. The fact that this can be done for a client-side storage is blowing my mind right now.

> This feature is available in Web Workers.

#### Key concepts and usage

IndexedDB is both a transactional database system and a JavaScript-based object-oriented database,
meaning it lets you store and retrieve objects that are indexed with a **key**.

Have in mind this concepts:

- You need to specify the database schema, open a connection to your DB and then retrieve and update
 data with **transactions**.
- Combine IndexedDB for storing data offline with _Service Workers_.

> **Note**: Like most web storage solutions, IndexedDB follows a _same origin policy_. So you cannot
> access stored data accross diferent domains.

#### Interfaces

The API offers some interfaces to work with in order for us to interact with the DB properly and also
it understands what we're trying to do with such objects.

In order for us to connect to a DB we call the function `open()` on the `indexedDB` attribute of a
`window` object, let me show you with a piece of code.

```js
// number one is the version, you can pass any other number
// as parameter there to set your version
window.indexedDB.open("NAME-OF-YOUR-DATABASE", 1);
// var IDBOpenDBRequest = indexedDB.open(name);
// var IDBOpenDBRequest = indexedDB.open(name, version);
```

#### Example of indexedDB

Here we can see a example of a todo app using IndexedDB.

http://mdn.github.io/to-do-notifications/
