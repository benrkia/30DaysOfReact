/*
An action is a plain JavaScript object describing the change.
The structure of the action object depends on your needs.
The only requirement is that it has a type property, which is not undefined.
*/

const incrementAction = {
    type: "INCREMENT",
}

const AddTodoAction = {
    todo: {
        id: 1,
        description: "this is a simple task to do",
        completed: false,
    },
    type: "ADD_TODO",
}

/*
Reducer is a
pure function that takes the previous state of the app, the action being dispatche
and returns the next state of the app

in this example the state has a default value of 0
in case of calling the counter reducer with an undefined state
Also, in case of unexpected action type we should return the prev state.

Notice we did not do state = state + 1; then return it.
Always keep in mind State is Immutable. we return a copy of the state with the desired changes
*/

const counter = (state = 0, action) => {

    switch(action.type) {
        case "INCREMENT":
        return state + 1;
        case "DECREMENT":
        return state - 1;
        default:
        return state;
    }

}

const { createStore } = Redux;

/*
Defining our store
keep in mind, we've only one store in a redux app

we need to specify the reducer that tells how state is updated with actions.
in this example we're calling create store with the counter reducer

*/

const store = createStore(counter);


// this is the first main function of the store
// it lets us get the current state.
console.log(store.getState());


// the second function is dispatch
// it lets us dispatch actions to change the state of your application
store.dispatch(incrementAction);
console.log(store.getState());


// the 3rd function is subscribe
// this functions call the registered callback each time an action has been dispatched
const showCurrentState = () => {
    document.querySelector("#current-state").innerText = store.getState();
}

// actually the function is called each time an action is dispatched
// so we're not going to see the current state unless we call the function manually
showCurrentState();

store.subscribe(showCurrentState);


document.querySelector('#increment').addEventListener('click', () => {
    store.dispatch(incrementAction);
});

document.querySelector('#decrement').addEventListener('click', () => {
    store.dispatch({type: "DECREMENT"});
});  