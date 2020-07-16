import React, { Component } from 'react';
import phone from '../../assets/images/phone.png';
import location from '../../assets/images/location.svg';
import mail from '../../assets/images/mail.svg';

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className='contact-section'>
        <a href='#'>
          <img src={phone} alt='Phone Icon' width='30' />
          <span className='link-text'>+387 51 000 111</span>
        </a>
        <a href='#'>
          <img src={location} alt='Phone Icon' width='30' />
          <span className='link-text'>Brace Jugovica 21</span>
        </a>
        <a href='#'>
          <img src={mail} alt='Phone Icon' width='30' />
          <span className='link-text'>mail@mail.com</span>
        </a>
      </div>
    );
  }
}

export default Contact;
