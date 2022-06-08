import React from 'react'
import "./style.css"
const Card = ({ name, image, main }) => {
    return (
        <div className="card">
            <div className="top">
                <div className="text">{name}</div>
                <img src={image} alt={name} />
            </div>
            <div className="bottom">
                {main}
            </div>
        </div>
    )
}

export default Card