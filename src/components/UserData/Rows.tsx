import React, { useContext } from 'react'

import { ApiContext } from '../../state/GlobalContext'
import Row from './Row'

const Rows = () => {
  const data = useContext(ApiContext)
  if (!data) return null

  return (
    <tbody>
      {data.map((row) => (
        <Row key={row.email} row={row} />
      ))}
    </tbody>
  )
}

export default Rows
