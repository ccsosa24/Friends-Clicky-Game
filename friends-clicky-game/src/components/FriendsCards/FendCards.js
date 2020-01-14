import React from 'react';
import './FendCards.css';

const FendCards = (props) => {

    return (
        
        <div className="card col-md-3 hover" onClick={() => props.clickIt(props.id)} >
            <div className="img-container">
                <img alt={props.name} src={props.image} id={props.id} 
                onClick={() => props.clickIt(5)} />           
            </div>
        </div>
    );
};

export default FendCards;
