import React, { Component } from 'react';
import home from './image/bgimage11.jpg'
import '../style/Home.css';
import '../style/responsive.css';



class Home extends Component {
  render() {
    return (
      <section className="home_banner_area" id="about" style={{backgroundImage:'url("'+home+'")'}}>
    		<div className="banner_inner">
    			<div className="container">
    				<div className="banner_content">
    					<h2>Innovate &nbsp; <span className="d-none"> | </span> Compute  &nbsp; <span className="d-none"> | </span> Engineer </h2>
    					<p>
                Our vision is to build a technology brand through intersection between digital innovation,
                 cloud computing
                and service engineering to deliver reliable cognitive experiences for the everyday Nigerian.
              </p>
    					<a className="btn btn-outline-light btn-lg disabled" href="#">Learn More <i className="fa fa-play"></i></a>

    				</div>
    			</div>
    		</div>
    	</section>

      );
  }
}

export default Home;
