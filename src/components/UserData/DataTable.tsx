import React from "react";
import Tbody from "./Tbody";





const DataTable: React.FC = () => {

  return (
    <table className='table'>
      <thead>
        <tr>
          <th> Name </th>
          <th> Email </th>
          <th> Username </th>
          <th> Password </th>
          <th> Image </th>
        </tr>
      </thead>
      
        
        <Tbody/>
        
     
    </table>
  );
};

export default DataTable;
