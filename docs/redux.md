# Redux 이해

## 1. Redux 이해하기 [#](http://d2.naver.com/helloworld/4966453)

Application의 state 관리 하는 library (2KB)

### 3원칙

- Single source of truth
  - 모든 state는 단일 store에 저장이 된다
- State is read-only
  - state 변경을 위해서는 action을 dispatch 해야함
- Changes are made with pure functions(reducers)

### 구성 요소

- store
- action & actionCreator
- reducer
- (React Component)

### Store

- state(state tree)를 담고 있는 객체
- initialize with `createStore(reducer, [preloadedState], [enhancer])`
- state를 수정하기 위해서는 `dispatch(action)` 호출
- state 접근을 위해서는 `getState()` 호출
- state 변경 감지를 위해서는 `subscribe(listener)` 등록

### action & actionCreator

- action: 이벤트를 기술해 놓은 pure object
- actionCreator: generate action, 서비스 로직은 여기에 들어가는 것이 좋다

### reducer

`@redux/reducers`

- pure function
- immutable

```js
f(state, action) = newState
```

`@redux/withoutReact`

## 2. React와 Redux 사용하기

redux api와 react-redux api를 구분

### redux api

#### `createStore(reducer, [preloadedState], [enhancer])`

`@redux/cretaeStore`

- `reducer`와 `초기 state`, `enhancer(middleware)`를 이용하여 `store` 객체 생성해서 반환

#### `bindActionCreators(actionCreators, dispatch)`

- `actionCreators`를 store의 `dispatch()`로 감싸 실행 할 수 있도록 한다

#### `combineReducers(reducers)`

- reducer를 계층적으로 관리할 수 있도록 해준다.
- parameter로 전달 되는 key 값이 state의 key값이 된다.

```js
combineReducers({ todos: myTodoReducer, counter: myCounterReducer })
```

```js
{
  todos,
  counter
}
```

`@redux/reducers`

#### `componse(...functions)`

- Compose functions from right to left
- `compose(f, g, h)` is the same as `(...args) => f(g(h(...args)))`
- 각 함수는 single parameter를 받아야한다.

#### `applyMiddleware(...middlewares)`

- `middlewares`를 배열로 받아 `dispatch`, 

### react-redux api

내부적으로 `react context` 사용

#### `<Provider store />`

- `<Provider>`로 전체 APP을 감싸고 `store`를 `prop`으로 전달

#### `connect()` - [HOC component](https://github.com/reactjs/react-redux/blob/4d302257e3b361731f44b1f546e547ed578c8eec/src/components/connectAdvanced.js#L115)

- 하위 `React Component`를 `store`에 접근 할 수 있게 만들어주는 HOC
- `mapStateToProps()`와 `mapDispatchToProps()`를 인자로 받아 기존 `React Component`를 감싼 `React Component`를 반환한다.

  - `mapStateToProps(state)`: `store`의 state를 `props`로 변경하여 내려줄 수 있는 함수
  - `mapDispatchToProps(actionsCreator, dispatch)`: `store`의 `dispatch()`함수를 사용하여 `actionCreator()`함수를 감싸서 `props`로 제공하는 함수

## 3. Redux middleware

### logger middleware

- 예시: `@redux/middleware`

### [Redux Thunk](https://github.com/gaearon/redux-thunk)

#### thunk?

A thunk is a function that wraps an expression to delay its evaluation.

```js
// calculation of 1 + 2 is immediate
// x === 3
let x = 1 + 2;

// calculation of 1 + 2 is delayed
// foo can be called later to perform the calculation
// foo is a thunk!
let foo = () => 1 + 2;
```
`dispatch`와 `getState`를 parameter로 받는 함수를 
- [source](https://github.com/gaearon/redux-thunk/blob/master/src/index.js)가 간단하니 redux-middleware 생성시 참고하기 좋음 

#### 사용 예시

```js
export function getPlayers(params) {
  return async (dispatch, getState) => {

    // loading 아이콘 노출
    dispatch({ type: 'SHOW_LOADING' }));

    const result = await fetch(`/getPlayers`);
    const players = await result.json();

    dispatch({
      type: 'UPDATE_PLAYERS',
      players
    })

    // loading 아이콘 감춤
    dispatch({ type: 'HIDE_LOADING' })
  }
}
```

## 추가로 읽으면 좋은 글

- [Redux 공식 문서](http://redux.js.org/)
- [you might not need redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)
- [A cartoon intro to Redux](https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6)[(한국어 번역)](http://bestalign.github.io/2015/10/26/cartoon-intro-to-redux/)
- [Pure javascript immutable arrays](http://vincent.billey.me/pure-javascript-immutable-array)