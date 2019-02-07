import React, { Component } from 'react';

import Blog from './Blog'
import OurTeam from './OurTeam'
import ContactUs from './ContactUs'
import Footer from './Footer'
//New Componets
import Navigation from './Navigation'
import Home from './Home'
import Services from './Services'
import '../style/LandingPage.css';

class LandingPage extends Component {
  render() {
    return (
    <div>
      <Navigation />
      <Home />
      <Services />
      <Blog />
      <OurTeam />
      <ContactUs />
      <Footer />

    </div>
    );
  }
}

export default LandingPage;
