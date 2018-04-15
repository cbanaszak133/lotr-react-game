import React from 'react';
import tree from './tolkien.jpg';
import parchment from './parchment-bkg.jpg';
import './Header.css';

const Header = props => {
    var style = {
    	backgroundImage: 'url(' + parchment + ')',
		minHeight:400,
		paddingTop:135,
		paddingTight:20,
		paddingLeft:20,
		paddingBottom:85,
		color:"black",
		textAlign:"center"
    }
    return(
		<header className="header" style={style}>
			<img id="tree" src={tree}></img>
			<h1>Lord of the Rings Clicky Game!</h1>
			<h3>Click on an image to earn a point, but don't click one twice!</h3>
		</header>	
	)
}

export default Header;
