import React from 'react';
import './Card.css';


const Card = props => (
    <div className="col-md-2 col-sx-2">
        <div className="card border-0 mb-4 card-details">
            <img className="card-img-top dranier-img" src={props.src} alt={props.alt} onClick={props.clickHandler} id={props.id}/>
        </div>
    </div>
)

export default Card;