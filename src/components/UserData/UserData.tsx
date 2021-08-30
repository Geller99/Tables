import { Link } from "react-router-dom";
import DataTable from "./DataTable";

interface DataProps {
  setData: any;
}

const UserData = ({ setData }: DataProps) => {
  return (
    <div className="UserData">
      <DataTable />

      <div className="UserData--Routes">
        <Link to="/Answers">
          <button> Go to Answers </button>
        </Link>

        <Link to="/">
          <button>Return Home</button>
        </Link>
        <button> Refresh API</button>
      </div>
    </div>
  );
};

export default UserData;
