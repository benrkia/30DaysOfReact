# Let's Start :)

> `DAY 0` : February 14, 2019  
**description :** Solve the [JSX challenge](./Code/1st_challenge/challenge.js)

**Thoughts :** what is jsx and we need to use it inside our react applications
\
**Resources :**
\
[Introducing JSX](https://reactjs.org/docs/introducing-jsx.html).
\
[What’s the Deal with JSX](https://hackernoon.com/whats-the-deal-with-jsx-9ab2f862bf2b).
\
[What the heck is JSX and why you should use it to build your React apps](https://medium.freecodecamp.org/what-the-heck-is-jsx-and-why-you-should-use-it-to-build-your-react-apps-1195cbd9dbc6).

---

> `DAY 1` : February 15, 2019  
**description :** Solve the [Elements rendering](https://codepen.io/benrkia/full/wNQadB)

**Thoughts :** learn about react's elements rendering and how react virtual dom works
\
**Resources :**
\
[The difference between Virtual DOM and DOM](https://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/).
\
[Rendering Elements](https://reactjs.org/docs/rendering-elements.html).

---

> `DAY 2` : February 16, 2019  
**description :** Solve the [Stateless/function components](https://codepen.io/benrkia/pen/xMQzpW)

**Thoughts :** what is react's stateless/function component, why we need to use react functional components and what is the difference between react's Element & Component.
\
**Resources :**
\
[Components and Props](https://reactjs.org/docs/components-and-props.html).

---

> `DAY 3` : February 17, 2019  
**description :** Continue with Stateless components, in this challenge we shoud create a simple application using complex stateless components (Nested components) & of course use props in order to exchange data between components [Components and Props](https://codepen.io/benrkia/full/ZwVOex)

**Thoughts :** Use stateless/functional components to build complex application by breaking our application down into nested components, it becomes easier to test and easier to keep track of what functionality goes where.
\
Usin props in order to share data between components, props are immutable objects which garantees that each child is responsible of it's state (we can say it's variables) and cannot change his parent's variables.
\
**Resources :**
\
[Components and Props](https://reactjs.org/docs/components-and-props.html).

---

> `DAY 4` : February 18, 2019  
**description :** Solve the [Circle problem](https://codepen.io/benrkia/full/wNQadB) using react Stateful components and react's Lifecycle.

**Thoughts :** in this challege we recreate the elements renedring problem using react's stateful components and react's lifecycle.
\
**Resources :**
\
[Understanding React v16.4+ New Component Lifecycle Methods](https://blog.bitsrc.io/understanding-react-v16-4-new-component-lifecycle-methods-fa7b224efd7d).
\
[State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html).

---

> `DAY 5` : February 20, 2019  
**description :** Solve the [World Clock problem](https://codepen.io/benrkia/full/WPWyyY) using react Stateful Components and Lifecycle Hooks.

**Thoughts :** how to use lifecycle hooks in order to rerender a component each time we change the state.
\
**Resources :**
\
[How to become a pro with React setState() in 10 minutes](https://medium.freecodecamp.org/get-pro-with-react-setstate-in-10-minutes-d38251d1c781).
\
[State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html).

---

> `DAY 6` : February 21, 2019  
**description :** Solve the [Asynchronous State](https://codepen.io/benrkia/full/daENGz).

**Thoughts :** how to efficiently use setState in order to change component's state. and handle the Asynchronous setState problems.

---

> `DAY 7` : February 22, 2019  
**description :** Solve the [Events Handling problem](https://codepen.io/benrkia/pen/mvZNez) using react Events Handling approach.

**The objective of this challenge is to both:**

    1. Test your understanding for what we've done
    2. Know how the handle event in react

`Fix this code such as the user should be able to tape inside the input and with each change to component should show the result.`

**Thoughts :** how to handle events inside react and how to access components methods inside the dom elements.
\
**Resources :**
\
[Handling Events](https://reactjs.org/docs/handling-events.html).
\
[Choosing the Best Approach for React Event Handlers](https://www.bignerdranch.com/blog/choosing-the-best-approach-for-react-event-handlers/).

---

> `DAY 8` : February 25, 2019  
**description :** Solve the [Packaging challenge](https://codepen.io/benrkia/pen/YgKwav) using react's type prop types package.

This code presents a simple interaction with stateful and stateless components via props. but as you can test (tape a text instead of a number) this won't be always as expected so type checking is something very important. also, it contains some inline styling in react.
\
`we have a few days before start project challenges, in which you'll be asked to make some small ~ medium applications via all the stuff we've learned so far.`

**Thoughts :** Learn about type checking in react which is very important as our app grows it gets difficult to manage the state, proprs and their types.  
\
**Resources :**
\
[Type checking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html).
\
[Validating React Component Props with prop-types](https://blog.logrocket.com/validating-react-component-props-with-prop-types-ef14b29963fc).

---

> `DAY 9` : February 26, 2019  
**description :** Discover the [Pure Components](https://codepen.io/benrkia/pen/moyqPb).

We won't have a real challenge today, because we are going to move from using react CDN to create-react-app which is very important to develop and deploy our applications.
\
`the example below shows the utility of Pure Components which is faster than Stateless Components in some cases. so consider using both stateless & pure components whenever you can.`

**Thoughts :** React offers several different methods for creating components. Today we'll talk about the final method of creating components, the function stateless pure component.
\
**Resources :**
\
[Stateless Component vs Pure Component](https://medium.com/groww-engineering/stateless-component-vs-pure-component-d2af88a1200b).
\
[Create React App](https://github.com/facebook/create-react-app).

---

> `DAY 10` : February 27, 2019  
**description :** Solve the [List & Keys challenges](https://codepen.io/benrkia/full/VRLGXj).

The objective of today's challenge is to learn about conditional rendering in react which is very beneficial. one of the most useful cases of conditional rendering is loading message. in today's challenge, i used CR to toggle the body of each post.
\
The main focus is on lists & the importance of key attribute.
to see the problem with this pen. click on a post to see it's content. then click on one of the sorting buttons. you'll notice that the active post is different from the one you've opened.
\
`The solution is very very simple. but it's really critical.`

**Thoughts :** The importance of the key attribute and how to use conditional rendering.
\
**Resources :**
\
[Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html).
\
[Lists and Keys](https://reactjs.org/docs/lists-and-keys.html).
[Create React App](https://github.com/facebook/create-react-app).

---

> `DAY 11` : February 28, 2019  
**description :** Solve the [Forms, Controlled Components and Lifting State up challenge](https://codepen.io/benrkia/pen/BbobwB).

Forms are the most useful thing we've ever had. but as you know each form or actually the inputs inside a form has their own state. Also, we've known the importance of states in react.
\
Controlled Components are stateful components in which we control our form, this way we're going to combine both form's state and component's state into one state which is controlled by the component.
\
`The errors exist in AddPost and App components.`

**Thoughts :** how the deal with forms inside react. also how to state lifting work.
\
**Resources :**
\
[Lifting State Up](https://reactjs.org/docs/lifting-state-up.html).
\
[Controlled Components](https://reactjs.org/docs/forms.html).

---

> `DAY 12` : March 03, 2019  
**description :** [How to deal with Remote Data in React](https://codepen.io/benrkia/pen/YgWqMN).

Today we'll see how to deal with remote data. actually react is a library for creating spa (single page apps), which are usually client-side rendering. simply, this means the server send a simple html page to the browser with a lot of js script. then the browser handles the dom rendering.
This spa interacts with a server in order to post or fetch data.
\
`For persons who want to learn by doing, here we are 😅`
\
In this example, i've made a small app that fetches remote data from an API. this example includes all that we've learned.
\
Starting from tomorrow we'll start building apps (basic ~ advanced), This will include some advanced topics like state management, testing....

**Thoughts :** how to work with remote data in react, which is very important as react is library for creating SPA. we'll always have interaction with external resources in order to get/post data.
\
**Resources :**
\
[How to Write a JavaScript Promise](https://medium.freecodecamp.org/how-to-write-a-javascript-promise-4ed8d44292b8).
\
[Fetching API Data with React.JS](https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2).

---

> `DAY 13` : March 04, 2019  
**description :** The first part of our first application **Todo App**.

Today we'll start our first application, which is the famous Todo App.
It'll be divided into 3 parts. in this first part, you should create the UI, and of course, think in react where we have to divide our app into components.
\
In the `second part`, we'll add the state to each stateful component and change the useless stateful components into stateless components.
\
And in the `last part`, we'll work with remote data.
This we'll complete our first application in react.

**Thoughts :** how to thinks in react and build the application using components.
\
Some resources: `How to divide your application into components 😅`
\
**Resources :**
\
[Thinking in React](https://reactjs.org/docs/thinking-in-react.html).

---

> `DAY 14` : March 05, 2019  
**description :** The second part of the **Todo** application.

Today our focus is on state management and making the application works. So an important thing to know is how the `interaction between components` is done inside react and of course the `life cycle hooks`.
\
The application of today includes all that we've seen from the beginning of this challenge.

**Thoughts :** The interaction between react components in a real example, and what are the struggles with this approach.
\
Some resources: `How to divide your application into components 😅`
\
**Resources :**
\
[Thinking in React](https://reactjs.org/docs/thinking-in-react.html).

---

> `DAY 15` : March 07, 2019  
**description :** The final part of the **Todo** application.

Et voilà !
[Test the final result](https://km30wxx9n7.codesandbox.io)
\
Our first React Application is done. you'll notice that few are the changed files during this transfer from local data to remote data And this is one of the benefits of components.
\
In this example, i used my own way of structuring code. it's up to you to structure your project the way you like.
\
`PS: because i used jsonplaceholder which is a Fake Online REST API, in other words jsonplaceholder just mimic what a REST API actually do and this is why you cannot really save the data inside the server.`

---

> `DAY 16` : March 09, 2019  
**description :** A simple article Application with **Routing**.

As you all know, each application has links and we can navigate through its pages.
But actually, when using the anchor element we're no longer using a SPA. which is the objective behind using react.
\
To fix that we have React router which is collections of components (react's model) that compose with our app in order to make navigation works pretty well.
\
Try to make this simple [App](https://62vz4n1w13.codesandbox.io/).
\
`In the next challenges, we'll focus on state management and then we'll create a full application including all what we've learned with authentication ofc.`
\
**Resources :**
\
[The Hitchhiker’s Guide To React Router v4: Grok React Router in 20 minutes](https://medium.freecodecamp.org/hitchhikers-guide-to-react-router-v4-a957c6a5aa18).
\
[Getting started with React Router](https://codeburst.io/getting-started-with-react-router-5c978f70df91).

---

> `DAY 17` : March 10, 2019  
**description :** **State Management** with react.

As we've seen the preferred method of working with React components is through passing data from one parent component to its children components. But as the application gets bigger and more complex it's very hard to keep track of the data flow.
\
Flux is a pattern for data management inside react application. The idea behind this approach is :

    1. We have a single-source of truth which is the Store.
    2. It can only be updated by triggering Actions.
    3. The Actions are responsible for calling the Dispatcher.
    4. The Store subscribes for the Dispatcher.

![Flux Diagram](./img/flux-diagram.png)
\
There are a lot of implementations of **Flux**, but the most used implementation by React community is **`Redux`**.
Redux is an implementation of the Flux pattern with a slight difference. **The 3 major principles of Redux** :

    √ Updates are made with pure functions also called reducers (replaces the dispatcher)
    √ State/Store is a read-only property
    √ State/Store is the single source of truth (There is only one Store in a Redux app).

Redux imports other feature to the pattern which is the middleware. We'll see it in further challenges.
\
To understand the principles of Redux check [this](https://jsbin.com/giwunat/24/edit?js,console,output).
\
Try to make this [simple app](https://jsfiddle.net/inancgumus/e3067seu/) using vanilla javascript and redux.
\
**Resources :**
\
[Rethinking Web App Development at Facebook](https://www.youtube.com/watch?list=PLb0IAmt7-GS188xDYE-u1ShQmFFGbrk0v&v=nYkdrAPrdcw).
\
[Redux Basic Tutorial](https://redux.js.org/basics/basic-tutorial).

---

> `DAY 18` : March 15, 2019  
**description :** integrate redux with react **React Redux**.

As we have seen Redux helps us manage our state in a better way.
Here i created a small [Implementation of Redux](https://codepen.io/benrkia/pen/pYWRME). By reading this code you should be able to understand how action, reducer and store works.
\
The Objective of today's challenge is to create a small `Users/Posts Management Application`. the application is a recap of what we've seen in `Routing` and `State Management`. You should have one global state **(store)** that contains an array of users and another array of posts. Any user of the application should be able to delete either posts or users. This way you're going to use all that we've learned in redux + what cames with react-redux.
\
**Resources :**
\
[Users/Posts management App](https://jv4v9w6vr9.codesandbox.io/).
\
To understand the principles of Redux check [This Tutorial Script](https://jsbin.com/giwunat/24/edit?js,console,output).
\
[React Redux Basic Tutorial](https://react-redux.js.org/introduction/basic-tutorial).

---

> `DAY 19` : March 16, 2019  
**description :** unlock redux power with **Redux middleware**.

Yesterday we've applied all that we've learned in redux in a small react application. in which we've worked through reducers, updating action creators, and connecting Redux to React components.

    Middleware is the software that connects network-based requests generated by a client to the back-end data the client is requesting. It is a general term for software that serves to "glue together" separate, often complex and already existing programs.

For Redux, middleware provides a third-party extension point between dispatching an action and handing the action off to the reducer:

    [ Action ] <-> [ Middleware ] <-> [ Dispatche ]

While middleware can be used for a variety of things, including asynchronous API calls, it's really important that you understand where it comes from.

Today's challenge is to use [andthetimeis Api](https://andthetimeis.com/) to fetch the current datetime each time a user click on update. this will recap the whole redux principles alongside with middlewares in redux.
[You can see it here](https://xrxmpyz5v4.codesandbox.io/). do not forget to check the console.
\
**Resources :**
\
[Creating custom Middleware in React/Redux.](https://medium.com/netscape/creating-custom-middleware-in-react-redux-961570459ecb).
\
[Understanding Redux Middleware](https://medium.com/@meagle/understanding-87566abcfb7a).
\
[Middleware](https://redux.js.org/advanced/middleware).
\
[applyMiddleware(...middleware)](https://redux.js.org/api/applymiddleware).

---

> `DAY 20` : March 25, 2019  
**description :** Hacker News Clone Using React.

My apologies for this gap, i coudn't post during the past week because of some engagements
\
Today will be the first part of our final application. [Hacker News](https://en.wikipedia.org/wiki/Hacker_News) Clone.
\
In this serie of challenges your task is to follow along with me in everything that has relation with file structuring & design patterns...
\
Otherwise i prefer to see you doing it your way. In other words, i want to see your style of coding after all that we have learned.
\
This application will summarize all the main components of React. And i believe at the end you'll be able to start working on real project using react readily.
\
[Here](https://codesandbox.io/s/y268pqpyr9) you can find the file structure that i follow. It's a very recommended structure to follow, but it's up to you.

**File Structure :**

1. Components: this folder will contain the main components of our app.
2. Services: this folder will contain service components that will deal with external data...
3. Store: this folder will contain redux files.
4. Styles: this folder will contain our style components. notice that i added `styled-components` dependency in order to make styles using javascript.
5. Utils: this will contain helper scripts.
\
**Resources :**
\
[Styled Components](https://www.styled-components.com/docs/basics#motivation).

---

> `DAY 21` : March 26, 2019  
**description :** Hacker News Clone Using React.

Today will be the 2nd part of our final application. [Hacker News](https://en.wikipedia.org/wiki/Hacker_News) Clone.
\
Today, were going to add redux to our application.
So our focus will be on the `store` folder.
we have the **index** file which contain the store of our application (the single source of truth).
\
The middleware file will contain our middleware, which a composition of all the middlewares we need to complete our application. **Notice:**, i used react-logger which a logging tool to chrome console, this will help us follow the changes of our store.
\
Also, redux thunk which i'll cover later.
\
And the root reducer of course.
\
Also, the app folder which contain the app actions & reducer. this will help us follow the separation of concerns pattern and groupe our functionalities by features.
\
[Here](https://codesandbox.io/s/130r9ojxm3) you can find the structure of our project after adding redux. Try to add redux to the project yourself, this will help understand everything.

**Resources :**
\
[Logger for Redux](https://github.com/LogRocket/redux-logger).
\
[A quick introduction to pipe() and compose() in JavaScript](https://medium.freecodecamp.org/pipe-and-compose-in-javascript-5b04004ac937).

---

> `DAY 22` : March 27, 2019  
**description :** Hacker News Clone Using React.

Today will be the 3rd part of our final application. [Hacker News](https://en.wikipedia.org/wiki/Hacker_News) Clone.
\
Today, were going to build the main UI of the application using `styled-components` dependency.
\
Also, our application will have 3 principles routes (`react-router-dom` dependency):

1. Home Route.
2. News Route (this route will be secure, you can access it only if you're authenticated).
3. Login Route.

There might be some additional routes in the future, but the 3 listed above are enough for the moment.
\
[Here](https://045jlxk4ww.codesandbox.io/) is the result after building the UI.
\
You can check the code from [here](https://codesandbox.io/s/045jlxk4ww). But as usual, try to do it your self.

**Resources :**
\
[React Router](https://reacttraining.com/react-router/web/guides/quick-start).
\
[Styled Components](https://www.styled-components.com/docs/basics#motivation).

---

> `DAY 23` : March 30, 2019
**description :** Hacker News Clone Using React.

Today will be the 4th part of our final application. [Hacker News](https://en.wikipedia.org/wiki/Hacker_News) Clone.
\
Today, we're going to build the login UI. Also, we'll implement the authentication system using the Okta Authentication API.
\
Also, we're going to use Okta SecureRoute in order to secure some routes from the unauthenticated users. In our application, the news route will be secure so that only the authenticated users can access it.
\
[Here](https://7z556r4zlj.codesandbox.io/) is our application so far.
\
`username:` testuser@hnc.com
\
`password:` User0000
\
You can check the code from [here](https://codesandbox.io/s/7z556r4zlj).

**Resources :**
\
[React Router](https://reacttraining.com/react-router/web/guides/quick-start).
\
[Okta React Overview](https://developer.okta.com/code/react/okta_react/).

---

> `DAY 24` : March 31, 2019
**description :** Hacker News Clone Using React.

Today will be the 5th part of our final application. [Hacker News](https://en.wikipedia.org/wiki/Hacker_News) Clone.
\
Today, we're going to implement our services. to do so we're using the [Hacker News API](https://github.com/HackerNews/API).
\
First, we'll create our Api.js file, this will be our wrapper of the Axios.js.
You can customize it the way you want, in my case & in case of success i only return response.data.
\
Also, we have the hackerNewsApi.js, we can think of it as i child of the Api.js (class that inherits our main API service).
\
It'll contain 3 functions: `getStoryIds`, `getStoryById` and `getStoryByPage`. there is more than 500 news so we cannot show them all at once. And of course, it's a great opportunity to see how we can do pagination using React.
\
[Here](https://7kl533mw51.codesandbox.io/) is our application so far. Please check the console to see the test of our API call, which i've done in the [index](Code/23th_challenge/src/index.js) file.
\
You can check the code from [here](https://codesandbox.io/s/7kl533mw51).

**Resources :**
\
[Fetch vs. Axios.js for making http requests](https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5).
\
[Getting Started With Axios](https://medium.com/codingthesmartway-com-blog/getting-started-with-axios-166cb0035237).

---

> `DAY 25` : April 01, 2019
**description :** Hacker News Clone Using React.

Today will be the 6th part of our final application. [Hacker News](https://en.wikipedia.org/wiki/Hacker_News) Clone.
\
Today, we're going to see the utility of redux-thunk in our application.
As we've seen when we studied redux. The actions are defined as plain objects, but there are some cases we need an action to be a function so that we can execute the buddy of this function each time we dispatch the action (e.g a function action that dispatch multiple actions at once).
\
First, we should create the story folder. This folder will contain the actions & reducer of the story.
We have 2 actions, the first one is fetch the Ids of the top stories then, each time we success the call we should dispatch the fetch stories action. The fetch stories action should call the fetchStoriesByPage service & each time it success we should increment the current page by one. we'll use this variable in the pagination.
\
The structure of the story state is as follow :

```javascript
{
    storyIds: [],
    stories: [],
    page: 0,
    isFetching: false,
    error: '',
}
```

Now you know the structure of the story state and what to do, try yourself to create the story actions & reducer, it'll help you a lot understanding how redux works.
\
Try to install [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) in order to debug the state changes in our application.
\
[Here](https://7zol3vorw0.codesandbox.io/) is our application so far. Please check the Redux DevTools or the console to see the state changes produced by the action i've dispatched in the [index](Code/24th_challenge/src/index.js) file.
\
You can check the code from [here](https://codesandbox.io/s/7zol3vorw0).

**Resources :**
\
[Understanding the Redux-Thunk Source Code](https://medium.com/@User3141592/understanding-the-redux-thunk-source-code-b3f8b930faf6).
\
[Redux-Thunk code source](https://github.com/reduxjs/redux-thunk/blob/master/src/index.js).