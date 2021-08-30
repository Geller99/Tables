import axios from "axios";

/* Fetches data from API and logs with error handling */

export const fetchUserData = (setData:any) => {
  const url = `https://randomuser.me/api/?results=20`;

  const result = axios
    .get(url)
    .then((response) => {
      if (response.data.results.length > 0) {
        setData(response.data.results);
      }
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.status);
      }
    });

  return result;
};
