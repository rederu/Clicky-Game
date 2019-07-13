import React from 'react';


const Card = props => (
    <div className="col-md-2 col-sx-2">
        <div className="card mb-4">
            <img className="card-img-top dranier-img" src={props.src} alt={props.alt} onClick={props.clickHandler} id={props.id}/>
        </div>
    </div>
)

export default Card;