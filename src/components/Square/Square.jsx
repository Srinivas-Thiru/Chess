import React from 'react'
import "./Square.css"



const Square = ({piece, image, i, j }) => {

    const sqNumber = i+j;

    const handleClick = (e) => {
        e.preventDefault();
        console.log(`Peice: ${piece}, X=${j+1}, Y=${i+1}`);
    }

    return (
        <div>
            <div className={`square ${sqNumber%2 === 0 ? "white-square" : "black-square"}`} onClick={handleClick} > 
                { image && <img src={image} alt="" /> }
            </ div>
        </div>
    )
}

export default Square