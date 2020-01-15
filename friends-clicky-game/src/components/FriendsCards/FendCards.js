import React from 'react';
import './FendCards.css';
// import Container from 'react-bootstrap/Container';

const FendCards = (props) => {

    return (
        
        <div className="card col-md-3 hover" >
            <div className="img-container">
                <div className="row" >
               
                <img alt={props.name} src={props.image} id={props.id} 
                onClick={() => props.ClickedId(props.id)}/>
               
                </div>           
            </div>
        </div>
    );
};

export default FendCards;
