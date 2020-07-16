import React, { Component } from 'react';
import facebookIcon from '../../assets/images/facebook.png';
import twitterIcon from '../../assets/images/twitter.png';
import linkedinIcon from '../../assets/images/linkedin.png';
import googleIcon from '../../assets/images/google-plus.png';
import wifiIcon from '../../assets/images/wifi.png';
class Social extends Component {
  state = {};
  render() {
    return (
      <div className='social-section'>
        <ul className='icon-section'>
          <li className='ml-0'>
            <img src={facebookIcon} width='30' />
          </li>
          <li>
            <img src={twitterIcon} width='30' />
          </li>
          <li>
            <img src={linkedinIcon} width='30' />
          </li>
          <li>
            <img src={googleIcon} width='30' />
          </li>
          <li>
            <img src={wifiIcon} width='30' />
          </li>
        </ul>
      </div>
    );
  }
}

export default Social;
