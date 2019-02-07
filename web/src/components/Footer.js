import React, { Component } from 'react';

import '../style/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid footer">
        <div className="container">
            <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-4 fspace">
                <img className="img-responsive" src="https://via.placeholder.com/120x45.png"/>
                <img className="img-responsive rounded-circle mt-3" src="https://via.placeholder.com/120x120.png"/>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 fspace">
                    <h4>About Us</h4>
                    <li><a href="#">Term</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Blog</a></li>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 fspace">
                        <h4>Services</h4>
                        <li><a href="#">Kira</a></li>
                        <li><a href="#">Jostrak</a></li>
                        <li><a href="#">Digital Transformation</a></li>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 fspace">
                        <h4>Information</h4>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">FAQ</a></li>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 fspace">
                        <h4>Contact</h4>
                        <li><i className="fa fa-phone"></i> <span>&nbsp;</span>+234 (0) 808 748 8793‬</li>
                        <li><i className="fa fa-envelope-square"></i><span>&nbsp;</span>corporate@josla.com.ng</li>

              </div>

            </div>
            <hr/>
            <footer>
              <div className="col-md-3 smedia mx-auto">
                <a href="https://www.facebook.com/joslaelectric"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="https://twitter.com/JoslaNigeria"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/josla.nigeria/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/company/josla"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
              </div>
              <div className="col-md-9 mx-auto">
                <p> &copy; 2019 | Josla Electric Company Ltd. All Right Reserved.</p>
              </div>
           </footer>
          </div>
    </div>
    );
  }
}

export default Footer;
