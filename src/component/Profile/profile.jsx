import React, { Component } from 'react';
import DemoImg from '../../assets/images/demo.png';
class Profile extends Component {
  state = {};
  render() {
    return (
      <div className='profile-container'>
        <div className='img-section'></div>
        <p className='para'>
          Hello, I'mLorem ipsum dolor sir amet conseur adipscing elit puella
          magna est
        </p>

        <p className='para'>
          Etiam sem eros, interdum at rutrum et acru gravida lacnia, fringilla
          justo ullerpercoam ac. Class aptent taciti adipscing elit puella magna
          est est sir amet conseur adipscing elit puella magna est I'mLorem
          ipsum dolor sir amet sem eros, interdum at rutrum et acru gravida
          lacnia, fringilla justo ullerpercoam ac. Class aptent taciti adipscing
          elit puella magna est est sir sem eros.
        </p>
      </div>
    );
  }
}

export default Profile;
