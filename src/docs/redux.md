# Redux 이해

- `connect()` - HOC [component](https://github.com/reactjs/react-redux/blob/4d302257e3b361731f44b1f546e547ed578c8eec/src/components/connectAdvanced.js#L115)

## 6. Redux 이해하기

- action & actionCreator
  - action: pure object
  - actionCreator: generate action
- reducer
  - pure function
  ```js
  f(state, action) = newState
  ```
- store
  - initialize with `createStore()`
  - getState()
  - dispatch()

## 7. React와 Redux 사용하기

- redux
  - `createStore()`
  - `bindActionCreator()`
  - `combineReducers()`
  - `componse()`
  - `applyMiddleware()`

- react-redux
  - `<Provider store />`
  - `connect()`

## 8. Redux middleware