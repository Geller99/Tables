import React, { useContext } from 'react'
import { Data } from '../../state/GlobalContext'

import Cell from './Cell'
import { ColumnContext } from './columns'

interface Props {
  row: Data
}

const Row = ({ row }: Props) => {
  const columns = useContext(ColumnContext)

  return (
    <tr className="custom--tr">
      {columns.map((column) => (
        <Cell key={column.key} column={column} row={row} />
      ))}
    </tr>
  )
}

export default Row
