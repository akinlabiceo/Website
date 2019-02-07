import React, { Component } from 'react';
import '../style/style.css';
import '../style/Navigation.css';
import '../style/responsive.css';


class NavBar extends Component {
  render() {
    return (
      <header className="header_area">
    		<div className="main_menu">
    			<div className="container">
    				<nav className="navbar navbar-expand-lg navbar-light">
    					<div className="container">
    						{/* !-- Brand and toggle get grouped for better mobile display */}
    						<a className="navbar-brand logo_h" href="#about"><img src="image/josla-icon-90.png" height="40px" weight="40px" alt="" /></a>
    						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    							<span className="icon-bar"></span>
    							<span className="icon-bar"></span>
    							<span className="icon-bar"></span>
    						</button>
    						{/*  Collect the nav links, forms, and other content for toggling */}
    						<div className="collapse navbar-collapse offset" id="navbarSupportedContent">
    							<ul className="nav navbar-nav menu_nav ml-auto">
    								<li className="nav-item active"><a className="nav-link" href="#about">Home</a></li>
    								<li className="nav-item"><a className="nav-link" href="#about">About</a></li>
    								<li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="#blog">Blog</a></li>
                    <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
    								<li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
    							</ul>
    						</div>
    					</div>
    				</nav>
    			</div>
    		</div>
    	</header>

      );
  }
}

export default NavBar;
