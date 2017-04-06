import React from 'react'

const helloElement = <h1>Hello!</h1>;

const helloWrapper = (
    <div>
      {helloElement}
    </div>
);

const Greeting = ({ name = '아무개' }) => (
    <div>{name}님 반갑습니다!</div>
);

export default {
    helloElement,
    helloWrapper,
    Greeting,
}
