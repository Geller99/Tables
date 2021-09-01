import { useContext } from "react";
import { Link } from "react-router-dom";
import { ApiContext } from "../../state/GlobalContext";
import DataTable from "./DataTable";
import { fetchUserData } from '../../hooks/FetchUser';

interface DataProps {
  setData:  React.Dispatch<any>;
}

const UserData = ({ setData }: DataProps) => {
  const data: any = useContext(ApiContext);
  return (
    <div className="UserData">

      {data && data.length > 0 ? <DataTable /> : <div className='Loading'>Loading...</div>}

      <div className="UserData--Routes">
        <Link to="/Answers">
          <button> Answers </button>
        </Link>

        <Link to="/">
          <button>Home</button>
        </Link>
        <button onClick= {() => fetchUserData(setData)}> Refresh</button>
      </div>
      
    </div>
  );
};

export default UserData;
