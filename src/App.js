import React, { Component } from 'react';
import characters from './characters.json';
import Navbar from './components/Navbar';
import Header from './components/Header';
import CharacterCard from './components/CharacterCard';
import './App.css';

class App extends Component {

  state = {
    characterArray: characters,
    score: 0,
    topScore: 0,
    message: "Click an image to begin!"
  }

    //Fischer-Yates shuffle algorithm
  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  clickImg = id => {

  	//Retrieve the clicked character
    const clickedCharacter = this.state.characterArray.filter(c => c.id === id);

  	//If the character has not been clicked, change its beenClicked value to true, else restart the game
    if(!clickedCharacter[0].beenClicked){
      const updatedCharacters = this.state.characterArray.map(c => {
         if(c.id === id){
         	c.beenClicked = true;
         	return c;
         }
         else{
         	return c;
         }
      });

      this.setState({
        characterArray: this.shuffle(updatedCharacters), 
        score: this.state.score + 1,
        message: "Nice one! Keep going!"
      });
    }  
    else{
		const charactersRefreshed = this.state.characterArray.map(c => {
			let refChar = {}
			refChar.id = c.id;
			refChar.name = c.name;
			refChar.image = c.image;
			refChar.beenClicked = false;
			return refChar;
		});

		let newTopScore = 0;
		if(this.state.score > this.state.topScore){
			newTopScore = this.state.score;
		}
		else{
			newTopScore = this.state.topScore;
		}

		this.setState({
			characterArray: this.shuffle(charactersRefreshed),
			topScore: newTopScore, 
			score: 0,
			message: "Wrong! Click again to refresh!"
		});

    }
  }



  render() {
    return (
      <div className="App">
        <Navbar message={this.state.message} score={this.state.score} topScore={this.state.topScore}/>
        <Header />
        <div className="container">
            {this.state.characterArray.map(character => (
                <CharacterCard 
                    img={character.image}
                    id={character.id}
                    clickImg={this.clickImg}
                    key={character.id}
                />
              ))}
        </div>  
      </div>
    );
  }
}

export default App;
