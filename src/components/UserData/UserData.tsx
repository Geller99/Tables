import { Link } from 'react-router-dom';
import DataTable from './DataTable';



const UserData = () => {
 
  return (
    <div className='UserData'>
      <DataTable/>

      <Link to="/Answers">
        <button> View Answers </button>
      </Link>

      <Link to='/'><button>Return Home</button></Link>
      
    </div>
  )
}

export default UserData
