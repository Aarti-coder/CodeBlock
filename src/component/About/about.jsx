import React, { Component } from 'react';
import Heading from '../Heading/heading';
import Profile from '../Profile/profile';
import Social from '../Social/social';
import Contact from '../Contact/contact';

class About extends Component {
  state = {};
  render() {
    return (
      <div className='row about-custom-row'>
        <div className='col-sm-3'>
          <div className=''>
            <Heading
              heading='About me'
              para='professional profile and contact info'
              classHeading='about-heading'
              classPara='about-para'
              classBox='about-div'
            />
          </div>
        </div>
        <div className='col-sm-6'>
          <Profile />
        </div>
        <div className='col-sm-3'>
          <Social />
          <Contact />
        </div>
      </div>
    );
  }
}

export default About;
