import React, { Component } from 'react';
import '../style/Services.css';
import '../style/responsive.css';



class Services extends Component {
  render() {
    return (
      <section className="causes_area" id="services">
        <div className="container">
          <div className="main_title">
            <h2>Services</h2>
            <p>We leverage today's technology to deliver <strong>SMART</strong> solutions to gain near future advantages.</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-1">
              <div className="single_causes txt1">

                <img src="image/kira.png" alt="" />
                <h4>AI-driven application to manage finance</h4>

                <button type="button" className="btn btn-lg btn-light disabled">Learn More</button>
                <div className="card-down d-none">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 xs-hidden">
                      <img src="https://via.placeholder.com/80x75.png" />
                      <p>Account</p>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <img src="https://via.placeholder.com/80x75.png" />
                      <p>Payment</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <img src="https://via.placeholder.com/80x75.png" />
                      <p>Analytics</p>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <img src="https://via.placeholder.com/80x75.png" />
                      <p>Cash</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="single_causes txt2">

                <img src="image/jostrak.png" alt="" />
                <h4>IoT-base solution to monitor and secure assets</h4>

                <button type="button" className="btn btn-lg btn-light disabled">Learn More</button>
                <div className="card-down d-none">
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <img src="https://via.placeholder.com/80x75.png" />
                      <p>Insure</p>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <img src="https://via.placeholder.com/80x75.png" />
                      <p>Track</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <img src="https://via.placeholder.com/80x75.png" />
                      <p>Rule</p>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <img src="https://via.placeholder.com/80x75.png" />
                      <p>Claims</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="single_causes txt3">

                <img src="https://via.placeholder.com/150x88.png" alt="" />
                <h4>Collaborative engagement to help organisation</h4>

                <button type="button" className="btn btn-lg btn-light disabled">Learn More</button>
                <div className="card-down d-none">
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <img src="https://via.placeholder.com/80x75.png" />
                      <p>Blueprint</p>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <img src="https://via.placeholder.com/80x75.png" />
                      <p>Integration</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <img src="https://via.placeholder.com/80x75.png" />
                      <p>Data</p>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <img src="https://via.placeholder.com/80x75.png" />
                      <p>Agile</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      );
  }
}

export default Services;
