import React from 'react'
import "./Square.css"



const Square = ({image, i, j }) => {
    const sqNumber = i+j+2;
    return (
        <div>
            <div className={`square ${sqNumber%2 === 0 ? "white-square" : "black-square"}`} > <img src={image} alt="" /> </ div>
            
        </div>
    )
}

export default Square