# Redux 이해

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
- state 변경 감지를 위해서는 `subscribe(listener)` 등록

### action & actionCreator

- action: pure object
- actionCreator: generate action

### reducer

- pure function
- immutable

```js
f(state, action) = newState
```

## 7. React와 Redux 사용하기

- redux
  - `createStore()`
  - `bindActionCreator()`
  - `combineReducers()`
  - `componse()`
  - `applyMiddleware()`

- react-redux
  - `<Provider store />`
  - `connect()` - HOC [component](https://github.com/reactjs/react-redux/blob/4d302257e3b361731f44b1f546e547ed578c8eec/src/components/connectAdvanced.js#L115)

## 8. Redux middleware

## 추가로 읽으면 좋은 글

- [you might not need redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)