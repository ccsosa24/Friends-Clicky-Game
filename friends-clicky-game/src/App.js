import React from 'react';
import Wrapper from './/components/Wrapper/Wrapper';
import MyBootstrap from './components/MyBootstrap/FriendsBootstrap';
import FendCards from './components/FriendsCards/FendCards';
import fendCards from './fendCards.json';
// import FriendsBg from './components/Background/FriendsBg';
import './App.css';

function App() {
   return (
     
       <Wrapper>
        <MyBootstrap></MyBootstrap>
        {
          fendCards.map(fendCards => (
        <FendCards
           key={fendCards.id}
           image={fendCards.image} />
        
          
          ))
        }

        
       </Wrapper>
        
      


     
   );
}

export default App;


