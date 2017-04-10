import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './CounterWithConnect';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(reducer)
const root = document.getElementById('root')

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Counter
        onIncrement={() => ({ type: 'INCREMENT' })}
        onDecrement={() => ({ type: 'DECREMENT' })}
      />
    </Provider>,
    root
  )
}

render();
store.subscribe(render);
