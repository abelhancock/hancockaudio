import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
    input = null;
  
    static propTypes = {
      proximity: PropTypes.number
    };
  
    render() {
      const { proximity, ...props } = this.props;
  
      const outlineStyle = {
            border:
          this.input &&
          this.input.required &&
          (!this.input.value || this.input.value.length === 0) &&
          `4px solid rgba(240,60,15, ${proximity})`
      };
  
      return (
        <input
          ref={component => (this.input = component)}
          style={outlineStyle}
          {...props}
        />
      );
    }
  }

export default Input;