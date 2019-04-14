
import React from 'react';
// import ReactCursorPosition from 'react-cursor-position';

const Cursor = props => {
    const {
      position: { x = 0, y = 0 } = {}
    } = props;
    return (
        <div
          tabIndex='0'
          style={{
            width: '24px',
            height: '24px',
            position: 'absolute',
            zIndex: '1000',
            transform: 'translate3D(' + (x - 12) + "px, " + (y - 12) + 'px, 0)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'none',
            mixBlendMode: 'difference'
          }}
        >
        {props.children}
      </div>
    );
  };

  export default Cursor