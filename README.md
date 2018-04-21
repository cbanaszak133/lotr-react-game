

## Lord of the Rings Clicky Game

This game was built using the React.js framework. The goal of the game is the click each character card only once, if you click a character twice the game is reset. Information about each character was saved in an external JSON file and imported within App.js. This class then reders various elements of the page, sending props such as the current score and current high score. Character cars were rendered within a array map with various props sent. Once a character card is clicked the clickImg function is called, which deteremines if the card has been already been clicked. If it has, the game is reset. If not, the card's beenClicked value is turned to true and the cards are shuffled. If the score is currently at 11 after a successful click, the game is then reset notifying the user they have won. 

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

