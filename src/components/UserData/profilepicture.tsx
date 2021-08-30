import React from "react";
import { useContext } from "react";
import { ApiContext } from "../../state/GlobalContext";

const ProfilePicture: React.FC = () => {
  const data: any = useContext(ApiContext);

  return (
    <tr className='profilepictures'>
      {data &&
        data.map((element: any) => {
          return <tr key={element.email} className='img'><img alt={element.name} src={element.picture.medium} /> </tr>;
        })}
    </tr>
  );
};

export default ProfilePicture;
