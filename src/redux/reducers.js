// import { combineReducers } from 'redux';
import console from '../util/console';

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text]);
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

let todoState = todos(undefined, {});
console.log(todoState);
todoState = todos(todoState, { type: 'ADD_TODO', text: '하하' });
console.log(todoState);
todoState = todos(todoState, { type: 'ADD_TODO', text: '호호' });
console.log(todoState);
// const reducers = combineReducers({ todos, counter });
// let state = reducers(undefined, {});

// console.log(state);