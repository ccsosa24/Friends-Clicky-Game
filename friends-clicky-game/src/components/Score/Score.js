import React from 'react';
import './Score.css';


const Score = (props) => {
    return(
    <div>
    <div className="Scores">
        <div className="total">
            Score: {props.scores} Highscore: {props.highscore}
        </div>
    </div>
    </div>
    )
}



export default Score;