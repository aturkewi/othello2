import React from 'react'
import Cell from './Cell'

function Row({ data, row, makeMove }) {
  return(
    <div className="row">
      {data.map( (playerId, i) => (
        <Cell key={i} column={i} row={row} makeMove={makeMove} playerId={playerId} />
      ))}
    </div>
  )
}

export default Row
