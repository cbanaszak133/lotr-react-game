import React from 'react';
import './Navbar.css';

const Navbar = props => (
	<nav className="navbar ">
		<ul>
			<li className="brand">
				<a href="/">LOTR Clicky Game</a>
			</li>
			<li className="nav-item">
				{props.message}
			</li>
			<li className="nav-item">
				Score: {props.score} | Top Score: {props.topScore}
			</li>
		</ul>
	</nav>					
);

export default Navbar;

