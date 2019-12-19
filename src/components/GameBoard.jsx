import React from 'react'
import Row from './Row'

function GameBoard({board, makeMove}) {
  return(
    <div className="board">
      {board.map((row, i) => <Row key={i} row={i} makeMove={makeMove} data={row} />)}
    </div>
  )
}

export default GameBoard
