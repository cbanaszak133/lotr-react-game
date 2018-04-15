import React from 'react';
import './Header.css';

const Header = props => (
	<header className="header">
		<img id="tree" src="/imgs/tolkien.jpg"></img>
		<h1>Lord of the Rings Clicky Game!</h1>
		<h3>Click on an image to earn a point, but don't click one twice!</h3>
	</header>	
)

export default Header;
