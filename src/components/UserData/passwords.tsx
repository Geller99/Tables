import React, { useContext } from 'react'
import { ApiContext } from '../../state/GlobalContext';

const Passwords: React.FC = () => {
  const data: any = useContext(ApiContext);

  return (
    <tr>
      {
        data && data.map((element: any) => {
          return <tr className='custom--tr'> {element.login.password} </tr>
        })
       }
    </tr>
  )
}

export default Passwords