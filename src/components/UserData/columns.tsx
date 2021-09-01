import React from 'react'
import { Data } from '../../state/GlobalContext'

interface BaseColumn {
  header: string
  key: string
}

interface RowColumn extends BaseColumn {
  accessor?: string
  row: (element: Data) => string | JSX.Element
}

interface AccessorColumn extends BaseColumn {
  accessor: string
  row?: (element: Data) => string | JSX.Element
}

export type Column = RowColumn | AccessorColumn

export const columns: Column[] = [
  {
    header: 'Name',
    key: 'name',
    row: (element: Data) => `${element.name.title} ${element.name.last} ${element.name.first}`,
  },
  {
    header: 'Email',
    key: 'email',
    accessor: 'email',
  },
  {
    header: 'Username',
    key: 'username',
    accessor: 'login.username',
  },
  {
    header: 'Password',
    key: 'password',
    accessor: 'login.password',
  },
  {
    header: 'Image',
    key: 'image',
    row: (element: Data) => (
      <div className="img">
        <img alt={element.name.first} src={element.picture.medium} />{' '}
      </div>
    ),
  },
]

export const ColumnContext = React.createContext<Column[]>(columns)
