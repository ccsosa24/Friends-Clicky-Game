import React from 'react';
import './FendCards.css';
// import Container from 'react-bootstrap/Container';

const FendCards = (props) => {

    return (
        
        <div className="card col-md-3 hover" onClick={() => props.clickIt(props.id)} >
            <div className="img-container">
                <div className="row" >
               
                <img alt={props.name} src={props.image} id={props.id} 
                onClick={() => props.clickIt()} />
               
                </div>           
            </div>
        </div>
    );
};

export default FendCards;
