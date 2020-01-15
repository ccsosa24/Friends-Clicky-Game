import React, { Component } from 'react';
import Wrapper from './/components/Wrapper/Wrapper';
import MyBootstrap from './components/MyBootstrap/FriendsBootstrap';
import FendCards from './components/FriendsCards/FendCards';
import NavBar from './components/NavBar/NavBar';
import Shuffle from './components/Shuffle/Shuffle';
import Score from './components/Score/Score';
import fendCards from './fendCards.json';
import './App.css';

class App extends Component {
  state ={
    FendCards:"",
    score: 0,
    highScore: 0,
    fendId: fendCards,
    outCome: "",
    userClicked:[]

};

ClickedId = id => {
  const userClicked = this.state.userClicked;
  const score = this.state.score;
  const highScore = this.state.highScore;
  this.setState({ outCome: 0 })
};
  
  shuffleFendsCard=(id)=>{
    console.log(id)
    // this.setState({
    //   FendCards:this.state.userClicked.append(id)
    // })
  }


  render (){
  return (
     
       <Wrapper>
        <NavBar></NavBar>
        <MyBootstrap></MyBootstrap>
        <ul className="list">
        {this.state.fendId.map(fendCards => (
        <FendCards
           key={fendCards.id}
           image={fendCards.image}
           FendCards={fendCards.id}
           ShuffleFendsCard={this.state.FendsCard} 
           clickIt={this.shuffleFendsCard()}
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


