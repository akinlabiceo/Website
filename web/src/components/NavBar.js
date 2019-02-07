import React, { Component } from 'react';
import './NavBar.css';


class NavBar extends Component {
  render() {
    return (
	<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
		<a className="navbar-brand"><img src="image/josla-icon-90.png" height="40px" weight="40px"/></a>
		  <button className="navbar-toggler" type="button" data-toggle="collapse"
		data-target="#navbarResponsive">
		<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarResponsive">
			<ul className="navbar-nav ml-auto" >
				<li className="nav-item">
					<a className="nav-link" href="#about">About</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#services">Services</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#blog">Blog</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#team">Team</a>
				</li>
        <li className="nav-item">
					<a className="nav-link" href="#contact">Contact</a>
				</li>
			</ul>
		</div>

	</nav>
      );
  }
}

export default NavBar;
