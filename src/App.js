import React, { Component } from 'react';
import characters from './characters.json';
import Navbar from './components/Navbar';
import Header from './components/Header';
import CharacterCard from './components/CharacterCard';
import './App.css';

class App extends Component {

  state = {
    characters: characters,
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
    const allCharacters = this.state.characters.filter(c => c.id !== id);

    const clickedCharacter = this.state.characters.filter(c => c.id === id);


    if(!clickedCharacter[0].beenClicked){
      const changedCharacter = clickedCharacter.map(c => {
         var nChar = {};
         nChar.id = c.id;
         nChar.name = c.name;
         nChar.image = c.image;
         nChar.beenClicked = true;
         return nChar;
      });

      allCharacters.push(changedCharacter[0]);
      this.setState({
        characters: this.shuffle(allCharacters), 
        score: this.state.score + 1,
        message: "Nice one! Keep going!"
      });
    }
    else{
      const charactersRefreshed = this.state.characters.map(c => {
         var nChar = {};
         nChar.id = c.id;
         nChar.name = c.name;
         nChar.image = c.image;
         nChar.beenClicked = false;
         return nChar;
      });

      let newTopScore = 0;
      if(this.state.score > this.state.topScore){
        newTopScore = this.state.score;
      }
      else{
        newTopScore = this.state.topScore;
      }

      this.setState({
        characters: this.shuffle(charactersRefreshed),
        topScore: newTopScore, 
        score: 0,
        message: "Wrong! Click an image to start again!"
      });
    }
  }



  render() {
    return (
      <div className="App">
        <Navbar message={this.state.message} score={this.state.score} topScore={this.state.topScore}/>
        <Header />
        <div className="container">
            {this.state.characters.map(character => (
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
