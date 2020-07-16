import React, { Component } from 'react';

class Header extends Component {
  state = {};
  render() {
    return (
      <header className='header'>
        <nav
          className={`navbar navbar-expand-lg  nav-main ${this.props.classfooter}`}
        >
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav m-auto'>
              <li className='nav-item active'>
                <a
                  className={`nav-text about-text ${this.props.classNavLink}`}
                  href='#'
                >
                  About me
                </a>
              </li>
              <li className='nav-item'>
                <a className={`nav-text ${this.props.classAfter}`} href='#'>
                  My Expertise
                </a>
              </li>
              <li className='nav-item'>
                <a className=' nav-text' href='#'>
                  Experience
                </a>
              </li>
              <li className='nav-item'>
                <a className=' nav-text' href='#'>
                  Education
                </a>
              </li>
              <li className='nav-item'>
                <a className=' nav-text' href='#'>
                  Portfolio
                </a>
              </li>
              <li className='nav-item'>
                <a className=' nav-text' href='#'>
                  My Blog
                </a>
              </li>
              <li className='nav-item'>
                <a className=' nav-text' href='#'>
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
