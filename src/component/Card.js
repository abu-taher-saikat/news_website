import React from 'react'
import './card.css'

const Card = ({headline, thumbnail}) => {
    return (
            <div className="card w-100">
                <div className="card__body">
                    <img src={thumbnail} alt="" className="w-100"/>
                    <div className="card__content">
                        <h6 className="card-title">{headline}</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                    </div>
                </div>
            </div>
    )
}

export default Card
