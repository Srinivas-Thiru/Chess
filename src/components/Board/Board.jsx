import React from 'react'
import "./Board.css"
import Square from '../Square/Square'

const piecePosition = {
  0: 'r',
  1: 'n',
  2: 'b',
  3: 'q',
  4: 'k',
  5: 'b',
  6: 'n',
  7: 'r',
};

const pieces = [];

for(let i = 0; i <8; i++) {

  // Positioning Pawns
  pieces.push({piece:"bp" ,image:"assets/pieces/bp.svg", x:1, y:i})
  pieces.push({piece:"wp", image:"assets/pieces/wp.svg", x:6, y:i})
  
  // Positioning Black
  pieces.push({piece:`b${piecePosition[i]}`, image:`assets/pieces/b${piecePosition[i]}.svg`, x:0, y:i})
  // Positioning White
  pieces.push({piece:`w${piecePosition[i]}`, image:`assets/pieces/w${piecePosition[i]}.svg`, x:7, y:i})


}

// BLACK
// pieces.push({image:"assets/pieces/br.svg", x:0, y:0})
// pieces.push({image:"assets/pieces/bn.svg", x:0, y:1})
// pieces.push({image:"assets/pieces/bb.svg", x:0, y:2})
// pieces.push({image:"assets/pieces/bq.svg", x:0, y:3})
// pieces.push({image:"assets/pieces/bk.svg", x:0, y:4})
// pieces.push({image:"assets/pieces/bb.svg", x:0, y:5})
// pieces.push({image:"assets/pieces/bn.svg", x:0, y:6})
// pieces.push({image:"assets/pieces/br.svg", x:0, y:7})

// WHITE
// pieces.push({image:"assets/pieces/wr.svg", x:7, y:0})
// pieces.push({image:"assets/pieces/wn.svg", x:7, y:1})
// pieces.push({image:"assets/pieces/wb.svg", x:7, y:2})
// pieces.push({image:"assets/pieces/wq.svg", x:7, y:3})
// pieces.push({image:"assets/pieces/wk.svg", x:7, y:4})
// pieces.push({image:"assets/pieces/wb.svg", x:7, y:5})
// pieces.push({image:"assets/pieces/wn.svg", x:7, y:6})
// pieces.push({image:"assets/pieces/wr.svg", x:7, y:7})




 
const Board = () => {
    let board = [];

    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
          let image = undefined;
          let piece = undefined;
          pieces.forEach(p => {
            if (p.x === i && p.y === j){
              image = p.image;
              piece = p.piece;
            }
          })

            
          board.push(<Square piece={piece} image={image} i={i} j={j} />)
        }
    }


  return (
    <div id='board'>
    {board}
    </div>
  )
}

export default Board
