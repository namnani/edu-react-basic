import React from 'react';
import PropTypes from 'prop-types';
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
  name: PropTypes.string,
  orange: PropTypes.bool,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
};

export default Button;
