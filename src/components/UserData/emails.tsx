import React, { useContext } from 'react'
import { ApiContext } from '../../state/GlobalContext';

const UserEmail: React.FC = () => {
  const data: any = useContext(ApiContext);

  return (
    <tr className='emails'>
      {data && data.map((element: any) => {
          return <tr className='custom--tr'> {element.email} </tr>
        })}
    </tr>
  )
}

export default UserEmail
