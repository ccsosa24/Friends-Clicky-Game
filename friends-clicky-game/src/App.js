import React, { Component } from 'react';
import Wrapper from './/components/Wrapper/Wrapper';
import MyBootstrap from './components/MyBootstrap/FriendsBootstrap';
import FendCards from './components/FriendsCards/FendCards';
import NavBar from './components/NavBar/NavBar';
// import Shuffle from './components/Shuffle/Shuffle';
import Score from './components/Score/Score';
import fendCards from './fendCards.json';
import './App.css';

class App extends Component {
  state ={
    
    score: 0,
    highScore: 0,
    fendId: fendCards,
    outCome: false,
    userClicked:[]

};

ClickedId = id => {
  const userClicked = this.state.userClicked;
  if(userClicked.indexOf(id)=== - 1) {
    userClicked.push(id);
    console.log(userClicked);
  }
  else{
    this.outCome.setState(true)
  }
  const score = this.state.score;
  const highScore = this.state.highScore;
  this.setState({ outCome: 0 })
};
  


  render (){
  return (
     
       <Wrapper>
        <NavBar></NavBar>
        <MyBootstrap />
      
        <ul className="list flex-container">
        {this.state.fendId.sort((shuffleFendsCard) => Math.random() - 0.5).map(fendCards => (
        <FendCards
           key={fendCards.id}
           id={fendCards.id}
           image={fendCards.image}
           FendCards={fendCards.id}
           ShuffleFendsCard={this.state.FendsCard} 
           clickIt={this.shuffleFendsCard}
           ClickedId={this.ClickedId}/>
        
        ))}
        </ul>
        {/* <Shuffle></Shuffle> */}
        <Score></Score>




       </Wrapper>
        
      


     
   );
};
};

export default App;


