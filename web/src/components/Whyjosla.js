import React, { Component } from 'react';
import './Whyjosla.css';

class Whyjosla extends Component {
  render() {
    return (
      <div className="whyjosla">
        <div className="container mt-5">
            <div className="row text-center">
                <div className="col-md-12">
                    <h2>Why Choose Us </h2>

                </div>
            </div>

			<div className="row text-center">
                <div className="col-md-8 offset-md-2">
                    <p>We are well known for our driven mechanisms, we deliver
					and intelligent services.
      		     we propose unique services to help the average customer leverage today's technology to gain near future advantages. </p>

                </div>
            </div>
			<div className="row text-center">
                <div className="col-md-6">

					<img src="image/web-app.png" className="img-responsive" alt="web app"/>
                </div>
				<div className="col-md-6">
					<p>We our esteem customer enjoy the following</p>

					<div className="media">
            <i class="fa fa-power-off" aria-hidden="true"></i>
						<i className="fa fa-phone" aria-hidden="true"></i>
						<div className="media-body">
							<h5 className="mt-0">24/7 Support</h5>
								Available to assist customer 27/4
						</div>
					</div>

					<div className="media">
						<i className="fa fa-phone" aria-hidden="true"></i>
						<div className="media-body">
							<h5 className="mt-0">24/7 Support</h5>
								Available to assist customer 27/4
						</div>
					</div>

					<div className="media">
						<i className="fa fa-phone" aria-hidden="true"></i>
						<div className="media-body">
							<h5 className="mt-0">24/7 Support</h5>
								Available to assist customer 27/4
						</div>
					</div>

                </div>
            </div>

        </div>

      </div>
    );
  }
}

export default Whyjosla;
