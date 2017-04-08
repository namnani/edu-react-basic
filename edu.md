# React Basic

## 목차

### React 이해

1. JSX 이해
1. React Component 이해
  - lifecycle method
  - properties
1. ReactDOM/ReactDOMServer 이해
  - render, renderToString, renderToStaticMarkup 비교
1. React event handling 이해
1. React 방식으로 사고하기 - Thinking in React

### Redux 이해

1. Redux 이해하기
  - action & actionCreator
  - reducer
  - store
1. React와 Redux 사용하기
1. Redux middleware

## React 이해

React?

```js
f(data) = View
```

자유도가 높다.

### 1. jsx 이해

```js
const Hello =  <h1 className='greeting'>Hello World!</h1>;
```

```js
var Hello = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello World!'
);
```

- jsx는 ReactElement (html + js)
- javascript 들어가야 하는 부분에 `{}` 넣고 사용

#### 태그 규칙

- 기본 html 태그는 소문자로 시작(React.DOM)
- 사용자 정의 Component는 대문자로 시작
- HTML과 달리 모든 태그는 self-closing 가능

### props

- `key={value}` 형태로 전달
- `{}` 영역은 javascript expressions를 자유롭게 사용 가능
- `if`, `for`, `while` 같은 제어는 밖에서 사용해야함

```js
function oddOrEven(props) {
  let type;
  if (props.number % 2 === 0) {
    type = <strong>짝수</strong>;
  } else {
    type = <i>홀수</i>;
  }

  return <div>{props.number}은 {type}입니다.</div>;
}
``` 
#### 주의 사항 
- JSX 코드 scope 안에 React 선언 필요
- props의 기본값은 true
- Single parent(16.0에서 개선 예정)
- Array로 반환하는 경우 `key` prop을 꼭 추가한다
- 실제 DOM은 아니다
- white space

### 2. React Component 이해
  - lifecycle method
  - properties


### 3. ReactDOM/ReactDOMServer 이해 
  - render, renderToString, renderToStaticMarkup 비교 


### 4. React event handling 이해 


### 5. React 방식으로 사고하기 - Thinking in React 


## Redux 이해 

- `connect()` - HOC [component](https://github.com/reactjs/react-redux/blob/4d302257e3b361731f44b1f546e547ed578c8eec/src/components/connectAdvanced.js#L115)
- 

### 6. Redux 이해하기 
  - action & actionCreator
  - reducer
  - store

### 7.  React와 Redux 사용하기


### 8. Redux middleware


