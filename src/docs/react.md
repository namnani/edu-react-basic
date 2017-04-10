# React 이해

React?

```js
f(data) = View
```

- view만 다룬다.
- 자유도가 높다.
- [React Native](http://facebook.github.io/react-native/), [React VR](https://developer.oculus.com/blog/introducing-the-react-vr-pre-release/)

## 0. React Element & React Component [#](https://facebook.github.io/react/blog/2015/12/18/react-components-elements-and-instances.html)

### React Element

- `type`과 `props`를 가지는 객체

  ```js
  {
    type: 'button',
    props: {
      className: 'button button-blue',
      children: {
        type: 'b',
        props: {
          children: 'OK!'
        }
      }
    }
  }
  ```

- syntatic sugar => jsx

  ```js
  <button className='button button-blue'>
    <b>
      OK!
    </b>
  </button>
  ```

### React Component

- `props`를 전달 받아 `React Element`를 반환하는 function 혹은 class
- React element tree를 encapsulate

```js
{
  type: Button,
  props: {
    color: 'blue',
    children: 'OK!'
  }
}
```

```js
{
  type: 'button',
  props: {
    className: 'button button-blue',
    children: {
      type: 'b',
      props: {
        children: 'OK!'
      }
    }
  }
}
```

## 1. jsx 이해

```js
const hello = <h1 className='greeting'>Hello World!</h1>;
```

```js
var hello = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello World!'
);
```

- jsx는 React Element (html + js)
- javascript 들어가야 하는 부분에 `{}` 넣고 사용

### 태그 규칙

- 기본 html 태그는 소문자로 시작(React.DOM)
- 사용자 정의 Component는 대문자로 시작
- HTML과 달리 모든 태그는 self-closing 가능

### props

`@jsx/jsx`

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

### 주의 사항

`@jsx/caution`

- JSX 코드 scope 안에 React 선언 필요
- props의 기본값은 true
- Single parent(16.0에서 개선 예정)
- Array로 반환하는 경우 `key` prop을 꼭 추가한다 `@jsx/list`
- 실제 DOM은 아니다
- white space `@jsx/whitespace`

## 2. React Component 이해 [#](https://facebook.github.io/react/docs/react-component.html)

### Component 구현 3가지 방법

`@reactComponent/create`

1. Extends React.Component(or React.PureComponent)
1. Functional Component(Stateless Component)
1. [React.createClass(deprecated)](https://facebook.github.io/react/blog/#migrating-from-react.createclass)

### lifecycle method

`@lifeCycle`

- Mounting
  - `constructor(props)`
  - `componentWillMount()` - ES6에선 contructor로 대체 가능
  - `render()`
  - `componentDidMount()`

- Updating
  - `componentWillReceiveProps(nextProps)`
  - `shouldComponentUpdate(nextProps, nextState)`
  - `componentWillUpdate(nextProps, nextState)`
  - `render()`
  - `componentDidUpdate(prevProps, prevState)`

- Unmounting
  - `componentWillUnmount()`

### Other APIs

- setState() `@reactComponent/setState`
  - 비동기로 동작 한다.

  ```js
  this.setState({ count: 1 });
  ```
  ```js
  this.setState((prevState, props) => {
    return {myInteger: prevState.myInteger + props.step};
  });
  ```

- forceUpdate()
  - 강제로 `render()` 호출
  - 되도록 사용하지 않는 것이 좋음

### Class properties

- defaultProps `@reactComponent/defaultProps`
- displayName
  - debugging 에 사용됨. JSX 자동 설정

### Instance Properties

- props
- state

![React Component lifecycle](https://oss.navercorp.com/youngje-yun/edu-react-basic/raw/master/public/img/react-component-lifecycle.png)

## 3. ReactDOM/ReactDOMServer 이해

### ReactDOM

- render()

`@jsx/jsx`

```js
ReactDOM.render(
  reactElement,
  containerDOM,
  [callback]
)
```

- unmountComponentAtNode()

```js
ReactDOM.unmountComponentAtNode(containerDOM)
```

- findDOMNode(): ref로 대체 가능, functional component 사용 안됨

```js
ReactDOM.findDOMNode(component)
```

### ReactDOMServer

`@render/serverRender`

- renderToString()
  - server rendering 후 client rendering 시 재사용
- renderToStaticMarkup()
  - 단순 static 마크업 생성

## 4. React event handling 이해

- 실제 DOM element의 event handling과 비슷
- 차이
  - event명은 camelCase: ex) onClick
  - string이 아닌 실제 function 전달
  - default 동작을 막기 위해서 `return false` 사용 불가
    - 대안 `e.preventDefault()` `@event/preventDefault`

  ```html
  <button onclick="activateLasers()">
    Activate Lasers
  </button>
  ```
  ```js
  <button onClick={activateLasers}>
    Activate Lasers
  </button>
  ```

- `addEventLinstener()` 사용할 필요 없음
- function을 prop으로 전달하는 경우 re-render를 피하기 위해 jsx inline function 바로 사용은 좋지 않음 `@event/inlineFunction`

## 5. React 방식으로 사고하기 - [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)

- Mock 준비
- 화면을 나눠서 컴포넌트 만들기
- 정적(static) 버전 만들기(state 사용 금지)
- state와 props 구별

## Tip

### 외부 library(ex> jQuery)와 함께 React 사용하기

- 되도록 사용안 할 수 있으면 사용 안하는 것이 좋다.
- 대체재: [Awesome React](https://github.com/enaqx/awesome-react)
- 그래도 꼭 사용해야한다면
  - Wrapping 하는 Component 생성
  - DOM 조작을 React와 library에서 같이 하는 일이 없도록 주의
  - 예시: [플레이스에서 jindo 사용 예제](https://oss.navercorp.com/bizServiceLab/sogum-next/blob/9eabbf5f175cfa3822c433e40917488efe23a55f/src/components/commons/ContentFlicking/ContentFlicking.js)

## 추가적으로 읽으면 좋은 글

- [React 공식 문서](https://facebook.github.io/react/docs/hello-world.html)
- [React 적용 가이드 - React 작동 방법](http://d2.naver.com/helloworld/9297403)
- [Functional setState is the future of React](https://medium.freecodecamp.com/functional-setstate-is-the-future-of-react-374f30401b6b?utm_source=mybridge&utm_medium=blog&utm_campaign=read_more)