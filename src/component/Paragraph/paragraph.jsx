import React, { Component } from 'react';

class Paragraph extends Component {
  state = {};
  render() {
    return (
      <div className='para-section'>
        <p className='para'>{this.props.para}</p>
      </div>
    );
  }
}

export default Paragraph;
