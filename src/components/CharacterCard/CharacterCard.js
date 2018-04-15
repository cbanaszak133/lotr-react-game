import React from 'react';
import './CharacterCard.css';

//Took HTML format from homework example
const CharacterCard = props => {
	var style = {
		backgroundImage: `url(`+ props.img + `)`
	}
	return(
		<div role="img" aria-label="click item" onClick={() => props.clickImg(props.id)}
			 className="click-item" style={style}></div>
	)
};

export default CharacterCard;