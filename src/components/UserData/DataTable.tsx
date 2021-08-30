import React from "react";
import UserEmail from './emails';
import Names from "./Names";
import UserName from './usernames';
import Passwords from "./passwords";
import ProfilePicture from './profilepicture';





const DataTable: React.FC = () => {

  return (
    <table className='table'>
      <thead>
        <tr>
          <th> Name</th>
          <th> Email </th>
          <th> Username </th>
          <th> Password </th>
          <th> Image </th>
        </tr>
      </thead>
      <tbody>
        <th>
          <Names />
        </th>
        <th>
          <UserEmail />
        </th>
        <th>
          <UserName />
        </th>
        <th>
          <Passwords />
        </th>
        <th>
          <ProfilePicture />
        </th>
      </tbody>
    </table>
  );
};

export default DataTable;
