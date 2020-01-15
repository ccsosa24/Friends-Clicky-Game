import React from 'react';


const NavBar = (props) => {
return (
    <div className="container" id="nav">

    

            <div className="row">
                <div className="col-md-1"><h2>Score: {props.scores}</h2></div>
               <div className="col-md-2"></div>
                <div className="col-md-3"><h2>High Score: {props.highscore}</h2></div>
            </div> 



    </div>
   
);
};
        












export default NavBar;