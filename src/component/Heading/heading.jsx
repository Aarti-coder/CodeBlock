import React, { Component } from 'react';

class Heading extends Component {
  state = {};
  render() {
    return (
      <div className={`${this.props.classBox} heading-setion`}>
        <h1 className={`heading ${this.props.classHeading}`}>
          {this.props.heading}
        </h1>
        <h3 className={`sub-heading ${this.props.classPara}`}>
          {this.props.para}
        </h3>
      </div>
    );
  }
}

export default Heading;
