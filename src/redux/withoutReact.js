/* eslint no-unused-vars: off */
import { createStore } from 'redux';
import console from '../util/console';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';


const counter = (state = 0, action = {}) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter);
const render = () => {
  document.getElementById('root').innerHTML = store.getState();
};

window.unsubscribe = store.subscribe(render);
render();

document.addEventListener('click', () => { store.dispatch({ type: INCREMENT }) });