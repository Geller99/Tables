import axios from "axios";

/* Fetches data from API and logs with error handling */
import React, { useEffect, useState } from "react";

export const useAxios = (url: string) => {
  
  const [data, setData] = useState<[]>([]);

  useEffect(() => {
    axios(url)
      .then(response => {
        setData(response.data.results);
        console.log(data)
      })
    .catch(error => {
      if (error.response) {
        console.log(error.response.status);
      }
    })
  })
  
} 