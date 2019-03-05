# Let's Start :)

> `DAY 0` : February 14, 2019  
**description :** Solve the [JSX challenge](./Code/1st_challenge/challenge.js)

**Thoughts :** what is jsx and we need to use it inside our react applications
\
Some resources:
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
Some resources:
\
[The difference between Virtual DOM and DOM](https://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/).
\
[Rendering Elements](https://reactjs.org/docs/rendering-elements.html).

---

> `DAY 2` : February 16, 2019  
**description :** Solve the [Stateless/function components](https://codepen.io/benrkia/pen/xMQzpW)

**Thoughts :** what is react's stateless/function component, why we need to use react functional components and what is the difference between react's Element & Component.
\
Some resources:
\
[Components and Props](https://reactjs.org/docs/components-and-props.html).

---

> `DAY 3` : February 17, 2019  
**description :** Continue with Stateless components, in this challenge we shoud create a simple application using complex stateless components (Nested components) & of course use props in order to exchange data between components [Components and Props](https://codepen.io/benrkia/full/ZwVOex)

**Thoughts :** Use stateless/functional components to build complex application by breaking our application down into nested components, it becomes easier to test and easier to keep track of what functionality goes where.
\
Usin props in order to share data between components, props are immutable objects which garantees that each child is responsible of it's state (we can say it's variables) and cannot change his parent's variables.
\
Some resources:
\
[Components and Props](https://reactjs.org/docs/components-and-props.html).

---

> `DAY 4` : February 18, 2019  
**description :** Solve the [Circle problem](https://codepen.io/benrkia/full/wNQadB) using react Stateful components and react's Lifecycle.

**Thoughts :** in this challege we recreate the elements renedring problem using react's stateful components and react's lifecycle.
\
Some resources:
\
[Understanding React v16.4+ New Component Lifecycle Methods](https://blog.bitsrc.io/understanding-react-v16-4-new-component-lifecycle-methods-fa7b224efd7d).
\
[State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html).

---

> `DAY 5` : February 20, 2019  
**description :** Solve the [World Clock problem](https://codepen.io/benrkia/full/WPWyyY) using react Stateful Components and Lifecycle Hooks.

**Thoughts :** how to use lifecycle hooks in order to rerender a component each time we change the state.
\
Some resources:
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
Some resources:
\
[Handling Events](https://reactjs.org/docs/handling-events.html).
\
[Choosing the Best Approach for React Event Handlers](https://www.bignerdranch.com/blog/choosing-the-best-approach-for-react-event-handlers/).

---

> `DAY 8` : February 25, 2019  
**description :** Solve the [Packaging challenge](https://codepen.io/benrkia/pen/YgKwav) using react's type prop types package.
\
This code presents a simple interaction with stateful and stateless components via props. but as you can test (tape a text instead of a number) this won't be always as expected so type checking is something very important. also, it contains some inline styling in react.
\
`we have a few days before start project challenges, in which you'll be asked to make some small ~ medium applications via all the stuff we've learned so far.`

**Thoughts :** Learn about type checking in react which is very important as our app grows it gets difficult to manage the state, proprs and their types.  
\
Some resources:
\
[Type checking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html).
\
[Validating React Component Props with prop-types](https://blog.logrocket.com/validating-react-component-props-with-prop-types-ef14b29963fc).

---

> `DAY 9` : February 26, 2019  
**description :** Discover the [Pure Components](https://codepen.io/benrkia/pen/moyqPb).
\
we won't have a real challenge today, because we are going to move from using react CDN to create-react-app which is very important to develop and deploy our applications.
\
`the example below shows the utility of Pure Components which is faster than Stateless Components in some cases. so consider using both stateless & pure components whenever you can.`

**Thoughts :** React offers several different methods for creating components. Today we'll talk about the final method of creating components, the function stateless pure component.
\
Some resources:
\
[Stateless Component vs Pure Component](https://medium.com/groww-engineering/stateless-component-vs-pure-component-d2af88a1200b).
\
[Create React App](https://github.com/facebook/create-react-app).

---

> `DAY 10` : February 27, 2019  
**description :** Solve the [List & Keys challenges](https://codepen.io/benrkia/full/VRLGXj).
\
The objective of today's challenge is to learn about conditional rendering in react which is very beneficial. one of the most useful cases of conditional rendering is loading message. in today's challenge, i used CR to toggle the body of each post.
\
The main focus is on lists & the importance of key attribute.
to see the problem with this pen. click on a post to see it's content. then click on one of the sorting buttons. you'll notice that the active post is different from the one you've opened.
\
`The solution is very very simple. but it's really critical.`

**Thoughts :** The importance of the key attribute and how to use conditional rendering.
\
Some resources:
\
[Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html).
\
[Lists and Keys](https://reactjs.org/docs/lists-and-keys.html).
[Create React App](https://github.com/facebook/create-react-app).

---

> `DAY 11` : February 28, 2019  
**description :** Solve the [Forms, Controlled Components and Lifting State up challenge](https://codepen.io/benrkia/pen/BbobwB).
\
Forms are the most useful thing we've ever had. but as you know each form or actually the inputs inside a form has their own state. Also, we've known the importance of states in react.
\
Controlled Components are stateful components in which we control our form, this way we're going to combine both form's state and component's state into one state which is controlled by the component.
\
`The errors exist in AddPost and App components.`

**Thoughts :** how the deal with forms inside react. also how to state lifting work.
\
Some resources:
\
[Lifting State Up](https://reactjs.org/docs/lifting-state-up.html).
\
[Controlled Components](https://reactjs.org/docs/forms.html).

---

> `DAY 12` : March 03, 2019  
**description :** [How to deal with Remote Data in React](https://codepen.io/benrkia/pen/YgWqMN).
\
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
Some resources:
\
[How to Write a JavaScript Promise](https://medium.freecodecamp.org/how-to-write-a-javascript-promise-4ed8d44292b8).
\
[Fetching API Data with React.JS](https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2).

---

> `DAY 13` : March 04, 2019  
**description :** The first part of our first application **Todo App**.
\
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
[Thinking in React](https://reactjs.org/docs/thinking-in-react.html).

---

> `DAY 14` : March 05, 2019  
**description :** The second part of the **Todo** application.
\
Today our focus is on state management and making the application works. So an important thing to know is how the `interaction between components` is done inside react and of course the `life cycle hooks`.
\
The application of today includes all what we've seen from the beginning of this challenge.

**Thoughts :** The interaction between react components in a real example, and what are the struggles with this approach.
\
Some resources: `How to divide your application into components 😅`
\
[Thinking in React](https://reactjs.org/docs/thinking-in-react.html).