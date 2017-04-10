# Redux 이해

## State Tree

- Redux Application은 한 개의 State Tree를 가진다.
- State Tree는 javascript object이다.

## Pure function

- `connect()` - HOC [component](https://github.com/reactjs/react-redux/blob/4d302257e3b361731f44b1f546e547ed578c8eec/src/components/connectAdvanced.js#L115)

## 6. Redux 이해하기

- store
- action & actionCreator
- reducer
- React Component

### Store

- state(state tree)를 담고 있는 객체
- initialize with `createStore(reducer, [preloadedState], [enhancer])`
- state를 수정하기 위해서는 `dispatch(action)` 호출
- state 접근을 위해서는 `getState()` 호출

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

## 추가로 읽으면 좋은 글

- [you might not need redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)