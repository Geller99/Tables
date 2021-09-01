import React from "react";
import { useContext } from "react";
import { ApiContext } from "../../state/GlobalContext";

const Tbody = () => {
  const data: any = useContext(ApiContext);
  return (
    <tbody className="names">
      {data &&
        data.map((element: any) => {
          return (
            <tr key={element.name.first} className="custom--tr">
              <td>
                {element.name.title} {element.name.last} {element.name.first}
              </td>

              <td key={element.email} className="custom--tr">
                {" "}
                {element.email}{" "}
              </td>
              <td key={element.login.username} className="custom--tr">
                {" "}
                {element.login.username}{" "}
              </td>
              <td key={element.login.password} className="custom--tr">
                {" "}
                {element.login.password}{" "}
              </td>

              <td key={element.email} className="img">
                <div>
                  <img alt={element.name} src={element.picture.medium} />{" "}
                </div>
              </td>
            </tr>
          );
        })}
    </tbody>
  );
};

export default Tbody;
