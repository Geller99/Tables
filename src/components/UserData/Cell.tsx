import React from 'react';
import { Data } from '../../state/GlobalContext'
import { Column } from './columns'

interface Props {
  column: Column
  row: Data
}

const getData = (accessor: string, row: Data) => {
  const parts = accessor.split('.')

  return parts.reduce((acc, curr) => acc[curr], row)
}

const Cell = ({ column, row }: Props) => {
  const content = typeof column.accessor !== 'undefined' ? getData(column.accessor, row) : typeof column.row !== 'undefined' ? column.row(row) : null

  return <td className="custom--tr">{content}</td>
}

export default Cell
