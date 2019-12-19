import React from 'react'

function Cell({ playerId, row, column, makeMove }) {
  return(
    <div className={`cell player${playerId}`} onClick={() => makeMove(row, column)}>

    </div>
  )
}

export default Cell
