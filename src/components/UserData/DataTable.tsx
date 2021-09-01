import React from 'react'

import Headers from './Headers'
import Rows from './Rows'

import { columns, ColumnContext } from './columns'

const DataTable: React.FC = () => {
  return (
    <ColumnContext.Provider value={columns}>
      <table className="content-table">
        <Headers />
        <Rows />
      </table>
    </ColumnContext.Provider>
  )
}

export default DataTable
