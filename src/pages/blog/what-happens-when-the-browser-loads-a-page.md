---
path: '/blog/what-happens-when-the-browser-loads-a-page'
title: 'What happens when the browser loads a page'
date: 2019-07-12T14:25:20.972Z
image: '/images/freestocks-org-pUvMN3j2kGc-unsplash.jpg'
featured: true
draft: false
thanks: 'Photo by freestocks.org on Unsplash'
---

## Content

The process to load a page starts when the browser requests a resource to the server, there are many different verbs that tell the server how it is expected to handle that request but we will stick with the most common one, to load a page using get.

Once the server responds with, typically, the HTML of the page requested, the browser reads it and starts a process called parsing HTML which is responsible to paint the HTML to the screen.

With the information of the HTML the browser creates a Document Object Model tree which contains all the HTML and the relationship between tags plus all the description of every single tag used for the HTML including the behavior (events), after that the Render tree is created this one, in particular, describes how the tree is represented visually to pain the HTML to the screen.

In order for a browser to paint the DOM and Render tree, a very complex process is executed, in my understanding, the HTML parser used by browsers uses a tokenizer to recognize tags and string, in addition to that, the parser uses a state machine to understand what behaviors should use depending on the tag the HTML has.

The parser also has an error tolerance built-in, which translate errors developers make into good HTML, for instance, if I have table, tbody, tr, and td tags but I don’t close them correctly, the parser will understand why I intended to do and will fix such errors to paint a well-done HTML table. There is a specification for HTML5 that has a list of error handlers.

Browsers also interpret the CSS using a box layout mode. In order to understand the selectors and rules read in the CSS files parsed there is an object called Stylesheet object where everything is stored, in my understanding, all the tags information is stored in this object except for those that do not have any valuable data to paint, for instance, tags with the rule display none.

Once all these steps are finished, the page rendering starts and with all the information stored in the objects and trees created it parses and paint everything to the screen, which is a complex process that involves CPU and GPU render.

Once everything is painted and the page has rendered, the browser executes the JavaScript code found in the page, also executes the JS code added to events listener invoked by the user interaction.
