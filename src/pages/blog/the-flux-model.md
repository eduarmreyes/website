---
path: '/blog/the-flux-model'
title: 'I explain what the flux model is'
date: 2019-07-12T12:26:11.379Z
image: '/images/bernard-hermant-TRECMhsAvIw-unsplash.jpg'
featured: true
draft: false
thanks: 'Photo by Bernard Hermant on Unsplash'
---

## Context

I have been recently contributing to the codebase of GitLab where I noticed that Vue is a part of the frontend code.

The flux model is a clever way to control the flow inside the web applications we create nowadays, for instance, back in the day when MVC was king of web development, we have a big problem to solve because this pattern did not scale well-enough with the changes in the codebase and the heavy interaction web applications have now.

Where the flux pattern shines the most is when an application utilizes a unidirectional data flow, in order for this to happen, flux introduced these core concepts:

- Dispatchers
- Store
- Action
- View

### Dispatcher

Dispatchers are responsible for the registration of actions when it receives an action, it looks for the type of the action received and dispatches it to the store.

### Store

The store is the source of truth the structure have to save the data, the store is linked to the dispatcher so that it listens to the actions dispatched. When the data changes in the store, it fires a change event.

### Actions

The definition of the internal point of communication is configured in the actions, actions are simple objects that define a type field and the data that it will transport.

### Views

The view portion of this pattern displays the data stored and also subscribes to change events from that store. All these steps allow the view to re-render with new data whenever a store dispatches a data change.

### The benefits

The flux model allows developers to have a single source of truth for the data used in the application, this means a lot for software as big as GitLab because the interactions are so many that it is unreliable to store the data using a prop drilling method or something related.

In VueX all actions that mutate the store’s data are put inside the store itself, adopting this pattern makes easier for developers to understand what type of mutation the data is likely to have and how it was triggered, therefore, debugging is not a nightmare anymore because when something goes south it is possible to know the trace log of what happened in the store.

In addition to that, VueX allows every component to have its own private state.
This makes testing a lot easier because you can threat components individually in terms of state management, but they are also connected by the store all components share.
