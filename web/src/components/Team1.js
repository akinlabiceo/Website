import React, { Component } from 'react';
import './OurTeam.css';

class OurTeam extends Component {
  render() {
    return (
<section id="team" className=" section1">
    <div className="container">
        <h5 className="section-title h1">OUR TEAM</h5>
        <div className="row">

            <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="image-flip" >
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src="image/akinlabi.png" alt="card image"/></p>
                                    <h4 className="card-title">Akinlabi Ajelabi</h4>
                                    <p className="card-text">C.E.O/Data Scientist</p>
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
                        </div>

                    </div>
                </div>
            </div>


            <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src="image/babatunde.png" alt="card image" /></p>
                                    <h4 className="card-title">Babatunde Adeniyi</h4>
                                    <p className="card-text">C.O.O/Innovation Lead</p>
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Babatunde Adeniyi</h4>
                                    <p className="card-text">The C.O.O/Innovation Lead Josla Tech and double as a Data Scientist. Python Developer</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src="image/karina.png" alt="card image" /></p>
                                    <h4 className="card-title">Karina Igbosi</h4>
                                    <p className="card-text">Business developer</p>
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Karina Igbosi</h4>
                                    <p className="card-text">The Business developer Josla Tech with 4years experience</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src="image/anike.png" alt="card image"/></p>
                                    <h4 className="card-title">Anike Fisher </h4>
                                    <p className="card-text">Font-end Developer</p>
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Anike Fisher</h4>
                                    <p className="card-text">The Font-end Developer and UI/UX Designer Josla Tech</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="xs-hidden sm-hidden col-md-2">
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src="image/naasir.png" alt="card image"/></p>
                                    <h4 className="card-title">Nasirudeen Luqman </h4>
                                    <p className="card-text">Software developer</p>
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Nasisudeen Luqman</h4>
                                    <p className="card-text">The Software developer and Mobile App Developer using React.js to design awesome web App for our client</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src="image/caleb.png" alt="card image"/></p>
                                    <h4 className="card-title">Omoijuanfo Caleb</h4>
                                    <p className="card-text">System Engineer</p>
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Omoijuanfo Caleb</h4>
                                    <p className="card-text">The  System Engineer Josla Tech.</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src="image/karina.png" alt="card image"/></p>
                                    <h4 className="card-title">Bolodeoku bolanle </h4>
                                    <p className="card-text">HR Manager</p>
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Bolodeoku bolanle </h4>
                                    <p className="card-text">The HR Manager</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
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

export default OurTeam;
