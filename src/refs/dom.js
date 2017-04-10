import React from 'react';
import ReactDOM from 'react-dom';

class TextInput extends React.Component {
  focus = () => {
    this.textInput.focus();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={el => { this.textInput = el; }}
        />
        <button onClick={this.focus}>
          Focus
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <TextInput />,
  document.getElementById('root')
);

export default TextInput;
