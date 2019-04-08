
import React from 'react';
import ReactCursorPosition from 'react-cursor-position';

const EnterSite = props => {
    const {
      detectedEnvironment: {
        isMouseDetected = false,
        isTouchDetected = false
      } = {},
      elementDimensions: { width = 0, height = 0 } = {},
      isActive = false,
      isPositionOutside = false,
      position: { x = 0, y = 0 } = {}
    } = props;
    return (
        <a
          tabIndex='0'
          style={{
            width: '80px',
            height: '80px',
            position: 'absolute',
            zIndex: '100',
            left: x - 40,
            top: y - 50,
            outline: 'none',
          }}
        >
        {props.children}
      </a>
    );
  };

  export default EnterSite