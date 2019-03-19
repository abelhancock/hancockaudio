import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Textarea extends Component {
    input = null;
  
    static propTypes = {
      proximity: PropTypes.number
    };
  
    render() {
      const { proximity, ...props } = this.props;
  
      const outlineStyle = {
            outline:
          this.input &&
          this.input.required &&
          (!this.input.value || this.input.value.length === 0) &&
          `4px solid rgba(255,0,0, ${proximity})`
      };
  
      return (
        <textarea
          ref={component => (this.input = component)}
          style={outlineStyle}
          {...props}
        >
        </textarea>
      );
    }
  }

export default Textarea;