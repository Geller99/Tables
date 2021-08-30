import React from 'react';
import { useContext } from 'react';
import { ApiContext } from '../../state/GlobalContext';

const UserName: React.FC = () => {
  const data:any = useContext(ApiContext)

  return (
    <tr>
      {
        data && data.map((element: any) => {
          return <tr key={element.login.username} className='custom--tr'> {element.login.username} </tr>
        })
       }
    </tr>
  )
}

export default UserName
