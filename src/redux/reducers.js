import { combineReducers } from 'redux';
import console from '../util/console';

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.text];
    default:
      return state;
  }
}

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  }
}

// let todoState = todos(undefined, {});
// console.log(todoState);
// todoState = todos(todoState, addTodo('하하'));
// console.log(todoState);
// todoState = todos(todoState, addTodo('호호'));
// console.log(todoState);

// let counterState = counter(undefined, {});
// console.log(counterState);
// counterState = counter(counterState, { type: 'INCREMENT' })
// console.log(counterState);
// counterState = counter(counterState, { type: 'INCREMENT' })
// counterState = counter(counterState, { type: 'INCREMENT' })
// counterState = counter(counterState, { type: 'DECREMENT' })
// console.log(counterState);

const reducers = combineReducers({ todos, counter });
let state = reducers(undefined, {});

console.log(state);

state = reducers(state, { type: 'INCREMENT' });

console.log(state);