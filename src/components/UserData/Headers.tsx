import React, { useContext } from 'react'

import { ColumnContext } from './columns'

const Headers = () => {
  const columns = useContext(ColumnContext)

  return (
    <thead className="names">
      <tr>
        {columns.map(({ header, key }) => (
          <th key={key}>{header}</th>
        ))}
      </tr>
    </thead>
  )
}

export default Headers
