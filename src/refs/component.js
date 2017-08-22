import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from './dom';

class AutoFocusTextInput extends React.Component {
  componentDidMount() {
    this.textInput.focusInput();
  }

  render() {
    return (
      <TextInput
        ref={c => { this.textInput = c; }}
      />
    );
  }
}

ReactDOM.render(
  <AutoFocusTextInput />,
  document.getElementById('test')
);
