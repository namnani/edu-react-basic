# React 이해

## 시작하기에 앞서

[A re-introduction to JavaScript (JS tutorial)](https://developer.mozilla.org/ko/docs/A_re-introduction_to_JavaScript)

`@es2015/es2015`

## 0. React?

```js
f(data) = View
```

- view만 다룬다.
- 자유도가 높다.
- [React Native](http://facebook.github.io/react-native/), [React VR](https://developer.oculus.com/blog/introducing-the-react-vr-pre-release/)

## 1. React Element & React Component [#](https://facebook.github.io/react/blog/2015/12/18/react-components-elements-and-instances.html)

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
```js
React.createElement(
  'button',
  { className: 'button button-blue' },
  React.createElement(
    'b',
    null,
    'OK!'
  )
);
```

### React Component

- `props`를 전달 받아 `React Element`를 반환하는 function 혹은 class
- React element tree를 encapsulate

```js
function Button(props) {
  return (
    <button className={`button button-${props.color}`}>
      <b>
        OK!
      </b>
    </button>
  )
}

or

const Button = ({ color = 'blue' }) => (
  <button className={`button button-${color}`}>
    <b>
      OK!
    </b>
  </button>
)
```

```js
  <Button color='blue'>
    OK!
  </Button>
```

```js
React.createElement(
  Button,
  { color: 'blue' },
  'OK!'
);

{
  type: Button,
  props: {
    color: 'blue',
    children: 'OK!'
  }
}
```

## 2. JSX 이해

- [playground](https://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015%2Creact%2Cstage-0&targets=&browsers=&builtIns=false&debug=false&code=const%20a%20%3D%20%3Cdiv%3Etest%3C%2Fdiv%3E%0A)

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

- jsx는 React Element(html 형태를 한 js object)
- javascript 표현식 들어가야 하는 부분에 `{}` 넣고 사용

### 태그 규칙

- 기본 html 태그는 소문자로 시작
- 사용자 정의 Component는 대문자로 시작
- HTML과 달리 모든 태그는 self-closing 가능
- 자식 태그를 가질 수 있음

### props

`@jsx/jsx`

- `key={value}` 형태로 전달 (단, string은 `''`나 `""` 사용 가능)
- `{}` 영역은 javascript expressions를 자유롭게 사용 가능
- `if`, `for`, `while` 같은 제어는 밖에서 사용해야함
- `...` 사용하여 object를 전달 가능

```js
function OddOrEven(props) {
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

- JSX 코드 scope 안에 React 선언 필요
- props의 기본값은 true `@jsx/defaultProps`
- Array로 반환하는 경우 `key` prop을 꼭 추가한다 `@jsx/list`
- Single parent(16.0에서 개선) `@jsx/fragment`
- 실제 DOM은 아니다.(Virtual DOM)
- XSS(cross-stie-scripting) 대응을 기본적으로 하기 위해 html escape 함 [#](https://reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks)
- white space `@jsx/whitespace`
- conditional jsx `@jsx/conditionalJsx`

## 3. React Component 이해 [#](https://facebook.github.io/react/docs/react-component.html)

### Component 구현 2가지 방법

`@reactComponent/create`

1. Extends React.Component(or React.PureComponent)
1. Functional Component(Stateless Component)

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

- `setState()` `@reactComponent/setState`
  - 비동기로 동작 한다.

  ```js
  this.setState({ count: 1 });
  ```
  ```js
  this.setState((prevState, props) => {
    return {myInteger: prevState.myInteger + props.step};
  });
  ```

- `forceUpdate()`
  - 강제로 `render()` 호출
  - 되도록 사용하지 않는 것이 좋음

### Class properties

`@reactComponent/classProperties`

- `defaultProps`
- `displayName`
  - debugging 에 사용됨. JSX 자동 설정

### Instance Properties

- props
- state

![React Component lifecycle](https://oss.navercorp.com/youngje-yun/edu-react-basic/raw/master/public/img/react-component-lifecycle.png)

## 4. ReactDOM/ReactDOMServer 이해

### ReactDOM

- `render()`

`@jsx/jsx`

```js
ReactDOM.render(
  reactElement,
  containerDOM,
  [callback]
)
```

- `hydrate()`
  - `render()`와 기능은 동일. 단,`ReactDOMServer.renderToString()` 결과 재활용
  - server render와 달라지는 내용을 `suppressHydrationWarning={true} ` 통해서 1 depth 무시 가능

`@reactDom/hydrate`

```js
ReactDOM.hydrate(
  reactElement,
  containerDOM,
  [callback]
)
```

- `unmountComponentAtNode()`

```js
ReactDOM.unmountComponentAtNode(containerDOM)
```

- `findDOMNode()`: ref로 대체 가능, functional component 사용 안됨

```js
ReactDOM.findDOMNode(component)
```

- `createPortal()` [#](https://reactjs.org/docs/react-dom.html#createportal): react root DOM node 외부에 React Element 그리기

`@reactDom/portal`

```js
ReactDOM.createPortal(child, container)
```

활용예시: [codepen](https://codepen.io/davidgilbertson/pen/xPVMqp?editors=0110)

### ReactDOMServer

`@render/serverRender`

- `renderToString()`
  - server rendering 후 client rendering 시 재사용
- `renderToStaticMarkup()`
  - 단순 static 마크업 생성

## 5. React event handling 이해 [#](https://facebook.github.io/react/docs/events.html)

- 실제 DOM element의 event handling과 비슷
- event callback 함수에 전달되는 event 객체는 React에서 합성한 event 객체
- 실제 event 객체에 접근하기 위해서는 `e.nativeEvent` 사용
- 차이
  - event명은 camelCase: ex) onClick
  - `string`이 아닌 실제 `function` 전달
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

## 6. React에서의 DOM 제어(Refs and DOM) [#](https://facebook.github.io/react/docs/refs-and-the-dom.html)

`refs` 사용하기 좋은 곳

- animation 제어를 해야할 때
- focus, text 선택 제어가 필요할 때(DOM API 호출을 해야할 때)
- 외부 DOM Library 사용할 때

그 외에는 되도록 사용하지 않는 것이 좋다.

`@refs/dom`

- refs는 DOM Element, React Component에 모두 할당 가능
- 단, React Component에 refs 할당 하려면 해당 React Component가 class 로 생성된 Component 여야함
- Functional Component에서도 내부에서 접근 하는 용도로는 사용 가능

`@refs/component`

## 7. context 소개

- 하위 모든 React Component에 data를 바로 전달할 수 있는 강력한 api

하지만,

- 안정성을 위한다면 사용하지 않는 것이 좋다.
- Redux나 MobX에 익숙하지 않다면 사용하지 않는 것이 좋다.
- React에 익숙하지 않다면 사용하지 않는 것이 좋다.

그래도 사용해야 한다면,

- context api 사용을 바로 하기 보다는 감싸서 사용 권장.
- context를 업데이트 하지 말아라.

### 사용 예시

`@context/context`

### lifecycle에서 context 접근

- `constructor(props, context)`
- `componentWillReceiveProps(nextProps, nextContext)`
- `shouldComponentUpdate(nextProps, nextState, nextContext)`
- `componentWillUpdate(nextProps, nextState, nextContext)`
- `componentDidUpdate(prevProps, prevState)`

### Functional Component에서 접근

- `contextTypes` property 설정
- 함수의 두 번째 인자로 `context` 접근 가능

`@context/statelessFunction`

## 8. React 방식으로 사고하기 - [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)

- Mock 준비
- 화면을 나눠서 컴포넌트 만들기
- 정적(static) 버전 만들기(state 사용 금지)
- state와 props 구별 [#cheatsheet](https://twitter.com/dan_abramov/status/749710501916139520)

## 9. 실습

- 계산기: `@example/calculator` https://ahfarmer.github.io/calculator/
- netflix style view: `@example/netflix`
  1. `@example/netflix/App.js`의 `TitleStaticExample` 이용하여 정적 버전 그리기
  1. `@example/netflix/App.js`의 `TitleExample` 이용하여 비동기 통신 결과 그리기 

## Tip

### 외부 library(ex> jQuery)와 함께 React 사용하기

- 되도록 사용안 할 수 있으면 사용 안하는 것이 좋다.
- 대체재: [Awesome React](https://github.com/enaqx/awesome-react)
- 그래도 꼭 사용해야한다면
  - Wrapping 하는 Component 생성
  - DOM 조작을 React와 library에서 같이 하는 일이 없도록 주의
  - 예시: [플레이스에서 jindo 사용 예제](https://oss.navercorp.com/bizServiceLab/sogum-next/blob/9eabbf5f175cfa3822c433e40917488efe23a55f/src/components/commons/ContentFlicking/ContentFlicking.js)

### lint

- eslint 권장
  - [airbnb 가이드](https://github.com/airbnb/javascript)
  - [naver 가이드](https://github.com/naver/eslint-config-naver)

## 추가로 읽으면 좋은 글

- [React 공식 문서](https://facebook.github.io/react/docs/hello-world.html)
- [React 적용 가이드 - React 작동 방법](http://d2.naver.com/helloworld/9297403)
- [Awesome React](https://github.com/enaqx/awesome-react)
- [Functional setState is the future of React](https://medium.freecodecamp.com/functional-setstate-is-the-future-of-react-374f30401b6b?utm_source=mybridge&utm_medium=blog&utm_campaign=read_more)
- [Find starter project](http://andrewhfarmer.com/starter-project/)