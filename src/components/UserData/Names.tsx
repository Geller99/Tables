import React from "react";
import { useContext } from "react";
import { ApiContext } from "../../state/GlobalContext";

const Names = () => {
  const data: any = useContext(ApiContext);
  return (
    <tr className="names">
      {data &&
        data.map((element: any) => {
          return (
            <tr className='custom--tr'>
              {" "}
              {element.name.title} {element.name.first} {element.name.last}{" "}
            </tr>
          );
        })}
    </tr>
  );
};

export default Names;
