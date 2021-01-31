import React from 'react'

const Card = ({headline}) => {
    return (
            <div class="card w-100">
                <div class="card-body">
                    <h5 class="card-title">{headline}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
    )
}

export default Card
