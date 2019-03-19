import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Textarea extends Component {
  
    static propTypes = {
      proximity: PropTypes.number
    };
    
    constructor(props) {
      super(props);
      this.state = {
        value: 'Please write an essay about your favorite DOM element.'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      const { proximity, ...props } = this.props;
  
      const outlineStyle = {
            outline:
          (!this.state.value || this.state.value.length === 0) &&
          `4px solid rgba(255,0,0, ${proximity})`
      };
  
      return (
        <textarea
          ref={component => (this.input = component)}
          style={outlineStyle}
          value={this.state.value}
          onChange={this.handleChange}
          {...props}
        />
      );
    }
  }

export default Textarea;