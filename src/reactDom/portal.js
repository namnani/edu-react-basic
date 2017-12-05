import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Modal = () => {
  return ReactDOM.createPortal(
    <div>I am a modal</div>,
    document.body.querySelector('#test')
  )
}

const App = () => (
  <Fragment>
    <div>Hello!</div>
    <Modal />
  </Fragment>
)

ReactDOM.render(
  <App />,
  document.body.querySelector('#root')
)
