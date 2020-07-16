import React, { Component } from 'react';
import Header from '../component/Header/header';
import Heading from '../component/Heading/heading';
import Paragraph from '../component/Paragraph/paragraph';
import About from '../component/About/about';
import '../style/App.scss';

class App extends Component {
  state = {};

  render() {
    return (
      <div className='layout-wrapper'>
        <Header />
        <section className='main-section'>
          <Heading heading='john doe' para='freelance designer' />
          <Paragraph
            para='Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          various risus ut purus dignissim sed sagittis libero rutrum.'
          />
        </section>
        <section className='about-section'>
          <About />
        </section>
        <Header
          classfooter='main-footer'
          classNavLink='nav-link-footer'
          classAfter='blue-bg'
        />
      </div>
    );
  }
}
export default App;
