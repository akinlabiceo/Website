import React, { Component } from 'react';
import '../style/OurTeam.css';

class OurTeam extends Component {
  render() {
    return (
      <section id="team" className="section1">
        <div className="container">
          <h5 className="section-title h1">OUR TEAM</h5>
          <div className="heading-underline"></div>
          <p>Get to know more about our core concepts and unique methodologies.</p>
          <div className="row team-container">
            <div className="col-xs-12 col-sm-6 col-md-3 team-card">
              <div className="card-body text-center">
                <img className="img-responsive rounded-circle" src="image/akinlabi.png" alt="card image"/>
                <h4 className="card-title">Akinlabi Ajelabi</h4>
                <p className="card-text">Data Scientist</p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a className="social-icon text-xs-center" target="_blank" href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="social-icon text-xs-center" target="_blank" href="#">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 team-card">
              <div className="card-body text-center">
                <img className="img-responsive rounded-circle" src="image/babatunde.png" alt="card image"/>
                <h4 className="card-title">Babatunde Adeniyi</h4>
                <p className="card-text">Innovation Lead</p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a className="social-icon text-xs-center" target="_blank" href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 team-card">
              <div className="card-body text-center">
                <img className="img-responsive rounded-circle" src="image/karina.png" alt="card image"/>
                <h4 className="card-title">Karina Igbosi</h4>
                <p className="card-text">Customer Developer</p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a className="social-icon text-xs-center" target="_blank" href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 team-card">
              <div className="card-body text-center">
                <img className="img-responsive rounded-circle" src="image/anike.png" alt="card image"/>
                <h4 className="card-title">Anike Fisher</h4>
                <p className="card-text">Service Developer</p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a className="social-icon text-xs-center" target="_blank" href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="social-icon text-xs-center" target="_blank" href="#">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 team-card">
              <div className="card-body text-center">
                <img className="rounded-circle" src="https://via.placeholder.com/120x120.png" alt="card image"/>
                <h4 className="card-title">Caleb Omoijuanfo</h4>
                <p className="card-text">Backend Developer</p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a className="social-icon text-xs-center" target="_blank" href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="social-icon text-xs-center" target="_blank" href="#">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 team-card">
              <div className="card-body text-center">
                <img className="rounded-circle" src="https://via.placeholder.com/120x120.png" alt="card image"/>
                <h4 className="card-title">Luqman Nasirudeen</h4>
                <p className="card-text">Frontend Developer</p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a className="social-icon text-xs-center" target="_blank" href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="social-icon text-xs-center" target="_blank" href="#">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 team-card">
              <div className="card-body text-center">
                <img className="rounded-circle" src="https://via.placeholder.com/120x120.png" alt="card image"/>
                <h4 className="card-title">Bolanle Bolodeoku</h4>
                <p className="card-text">People Intern</p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a className="social-icon text-xs-center" target="_blank" href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 advert">
              <h3>We are hiring!</h3>
              <p>Contact us if you think you are adventurous enough, to help our team grow.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OurTeam;
