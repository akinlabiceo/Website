import React, { Component } from 'react';

import home from './image/bgimage.jpg'
import './Maincontent.css';

class Maincontent extends Component {
  render() {
    return(
	<div id="about">
    <div className="landing">
		  <div className="home-wrap">
			   <div className="home-inner" style={{backgroundImage:'url("'+home+'")'}}></div>
      </div>
	  </div>
	  <div className="caption text-center">
			<h1>Innovate &nbsp; | Compute  &nbsp; | Engineer </h1>
			<p>
        Our vision is to build a technology brand through intersection between digital innovation, cloud computing <br className="hidden-xs" />
				and service engineering to deliver reliable cognitive experiences for the everyday Nigerian.
      </p>
      <button className="btn btn-outline-light btn-lg disabled">Learn More <i className="fa fa-play"></i></button>
	  </div>
	</div>
    );
  }
}

export default Maincontent;
