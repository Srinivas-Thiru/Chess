
import React, { useState } from 'react'
import Square from "../Square/Square"
import "./Board.css"
const Board = () => {

  let initialBoard = [["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"],
                      ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
                      ["", "", "", "", "", "", "", ""],
                      ["", "", "", "", "", "", "", ""],
                      ["", "", "", "", "", "", "", ""],
                      ["", "", "", "", "", "", "", ""],
                      ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
                      ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"]];
  
  const [board, setBoard] = useState(initialBoard);
  const [turn, setTurn] = useState('w');
  const [isSelected, setIsSelected] = useState(false);
  const [selectedPiece, setSelectedPiece] = useState({});
  console.log(board);


  const movePiece = (piece, start, end) => {
    if (turn !== piece[0]){
      return
    }
    let newBoard = [...board];
    newBoard[start[0]][start[1]] = "";
    newBoard[end[0]][end[1]] = piece;
    setBoard(newBoard);
    setIsSelected(false);
    setSelectedPiece({});
    setTurn((prev) =>  prev === 'w' ? 'b':'w');

  }


  return (
    <div>
      Turn: {turn === 'w' ? "WHITE" : "BLACK"}
      <div id="board"> 
        {board.map((r, rIndex) => {
          return (
            <>
            {r.map((piece, cIndex) => <Square movePiece={movePiece} selectedPiece = {selectedPiece} setSelectedPiece = {setSelectedPiece} setIsSelected={setIsSelected} isSelected = {isSelected}  turn ={turn} piece={piece} image={piece ? `assets/pieces/${piece}.svg` : "assets/pieces/n.svg"} i={rIndex} j={cIndex} />)}
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Board