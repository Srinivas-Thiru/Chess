import React, { useState } from 'react'
import "./Square.css"

const Square = ({ movePiece, selectedPiece, setSelectedPiece, isSelected, setIsSelected, turn, piece, image, i, j }) => {

    const handleClick = (e) => {
        e.preventDefault();

        if (isSelected) {
            movePiece(selectedPiece.piece, [selectedPiece.x,selectedPiece.y], [i,j] )
            console.log(selectedPiece , piece, i,j)
        }else{
            if (turn !== piece[0]){
                return
            }
            setIsSelected(true)
            setSelectedPiece({piece: piece, x:i, y:j})
            console.log(selectedPiece)
            // e.target.classList.add("selected")
        }
        // setTimeout(() => {e.target.classList.remove("selected")}, 3000)
    }
    const sqNumber = i+j;

    return (
        <div >
        <div onClick={handleClick} className={`square ${selectedPiece && selectedPiece.x === i && selectedPiece.y === j ? "selected" : ""} ${sqNumber%2 === 0 ? "white-square" : "black-square"}`}  > 
                { image && <img src={image} alt="" /> }
            </ div>
        </div>
    )
}

export default Square