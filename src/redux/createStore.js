// getState, dispatch, subscribe
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter(l => listener !== l);
    }
  };

  dispatch({});

  return { getState, dispatch, subscribe }
}

export { createStore };
