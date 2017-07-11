import React from 'react';
import './Button.css';

class Button extends React.Component {
  // [TO-DO] click handler 추가
  render() {
    // [TO-DO] props 확인하여 클래스 추가
    // 주황색: 'orange' 추가
    // 넓은 버튼: 'wide' 추가 
    return (
      <div className='component-button'>
        <button>
          {this.props.name}
        </button>
      </div>
    );
  }
}
Button.propTypes = {
  name: React.PropTypes.string,
  orange: React.PropTypes.bool,
  wide: React.PropTypes.bool,
  clickHandler: React.PropTypes.func,
};
export default Button;
