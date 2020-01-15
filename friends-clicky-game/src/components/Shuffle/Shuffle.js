import React, { Component } from 'react';


class App extends Component {
        state ={
            FendCards:"",
            score: 0,
            highScore: 0,
            fendId: [],
            outCome: ""

        };

       shuffleFendsCard = FendCards => {
            const fendId =this.state.fendId;

            const map1 = FendCards.map(x => console.log(x))

            // if(fendId.includes(id)){
            //     this.setState({ FendId: [], score: 0, outCome: "Oh My God!! Loser!!" });
            // }
           // this.setState.State({ FendCards, FendId, score: clickedFendId.length, outCome:" " });
            // for (let i = FendCards.length -1; i > 0; i--) {
            //     let j =  Math.floor(Math.random() * (i + i));
            //     [FendCards[i], FendCards[j] = [FendCards[j], FendCards[i]] ];
            // }
       }

       render() {
           return (
               <score total={this.state.score}
                   outCome={this.state.outCome} />


               
           )
       }
  


    };
export default App;