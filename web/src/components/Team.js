import React, { Component } from 'react';
import './Team.css';

class Team extends Component {
  render() {
    return (
      <div className="container-fluid our-team">
      <div className="container">
        <div className="col-12">
          <h2 className="heading">Our Team</h2>
          <div className="heading-underline"></div>
        </div>
      	<div className="row">
      		<div className="col-md-4">
      			<div id="myCarousel" className="carousel slide" data-ride="carousel">


      				<ol className="carousel-indicators">
      					<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      					<li data-target="#myCarousel" data-slide-to="1"></li>
      					<li data-target="#myCarousel" data-slide-to="2"></li>
      				</ol>


      				<div className="carousel-inner">
      					<div className="item carousel-item active">
      						<div className="img-box"><img src="image/akinlabi.png" alt="developer"/></div>
      						<p className="testimonial"><b>Akinlabi Ajelabi</b>, C.O.E/Data Scientist</p>
                  <p className="overview">
                  <div className="social-bookmark1">
                      <ul>
                          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fa fa-github"></i></a></li>

                      </ul>
                  </div></p>
      					</div>

      					<div className="item carousel-item">
      						<div className="img-box"><img src="image/caleb.png" alt="developer"/></div>
                  <p className="testimonial"><b>Omoijuanfo Caleb</b>, System Engineer</p>
                  <p className="overview">
                  <div className="social-bookmark1">
                      <ul>
                          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fa fa-github"></i></a></li>

                      </ul>
                  </div></p>
      					</div>

                <div className="item carousel-item">
      						<div className="img-box"><img src="image/naasir.png" alt="developer"/></div>
                  <p className="testimonial"><b>Nasirudeen Luqman</b>, Software developer</p>
                  <p className="overview">
                  <div className="social-bookmark1">
                      <ul>
                          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fa fa-github"></i></a></li>

                      </ul>
                  </div></p>
      					</div>

                <div className="item carousel-item">
      						<div className="img-box"><img src="image/babatunde.png" alt="developer"/></div>
                  <p className="testimonial"><b>Babatunde Adeniyi</b>, C.O.O/Innovation Lead</p>
                  <p className="overview">
                  <div className="social-bookmark1">
                      <ul>
                          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fa fa-github"></i></a></li>

                      </ul>
                  </div></p>
      					</div>

                <div className="item carousel-item">
      						<div className="img-box"><img src="image/karina.png" alt="developer"/></div>
                  <p className="testimonial"><b>Karina Igbosi</b>, Business developer</p>
                  <p className="overview">
                  <div className="social-bookmark1">
                      <ul>
                          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fa fa-github"></i></a></li>

                      </ul>
                  </div></p>
      					</div>

      					<div className="item carousel-item">
      						<div className="img-box"><img src="image/anike.png" alt="developer"/></div>
                  <p className="testimonial"><b>Anike Fisher</b>, Font-end Developer</p>
                  <p className="overview">
                  <div className="social-bookmark1">
                      <ul>
                          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fa fa-github"></i></a></li>

                      </ul>
                  </div></p>
      					</div>
      				</div>


      			</div>
      		</div>




			<div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                    <div className="service-two-content wow fadeIn">
                        <div className="row mt-0 md-0">
                            <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 no-padding pr-0 pd-0">
                                <div className="single-service-two border">
                                    <div className="service-icon-two"><i className="fa fa-leanpub"></i></div>
                                    <h4>Cyber security and Mobility</h4>
                                    <p>What is cyber security? Cyber security is the practice of protecting systems, networks, programs </p>
                                    <div className="btndiv">  <button type="button" className="btn btn-light">Read More</button> </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 no-padding pl-0 pd-0">
                                <div className="single-service-two border-top border-bottom border-right">
                                    <div className="service-icon-two"><i className="fa fa-leanpub"></i></div>
                                    <h4>Cognitive MicroServices</h4>
                                    <p>What it is Josla is Lagos-based technology company whose core capabilities lie in digital innovation, cloud computing</p>
                                    <div className="btndiv"> <button type="button" className="btn btn-light">Read More</button> </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 no-padding pr-0 pt-0">
                                <div className="single-service-two border-left border-right border-bottom">
                                    <div className="service-icon-two"><i className="fa fa-leanpub"></i></div>
                                    <h4>Moving from a novice to a Front-end Dev.</h4>
                                    <p>At the start of my final year , I knew I wanted to get involved in the Nigerian Tech industry but I wasn’t sure how to do it.</p>
                                    <div className="btndiv">  <button type="button" className="btn btn-light">Read More</button> </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 no-padding pl-0 pt-0">
                                <div className="single-service-two border-right border-bottom">
                                    <div className="service-icon-two"><i className="fa fa-leanpub"></i></div>
                                    <h4>Introducing our new product – KIRA.</h4>
                                    <p>The world is changing and its only right to change with it. People and businesses need to be open to new tech</p>
                                    <div className="btndiv">  <button type="button" className="btn btn-light">Read More</button></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>





      	</div>
      </div>
      </div>
    );
  }
}

export default Team;
