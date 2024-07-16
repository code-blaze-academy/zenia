import React, { useEffect, useState } from "react";

function useFetch(id) {
  const [data, setData] = useState({
    isLoading: false,
    apiData: undefined,
    serverError: null,
  });
  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;

      //  other conditions
      const url = `https://zenia.applematch.com/user/${id}/`;
      try {
        setData((prev) => ({ ...prev, isLoading: true }));
        const response = await fetch(url);
        // console.log(response);
        const resObj = await response.json();

        if (response.status === 200) {
          setData((prev) => ({ ...prev, isLoading: false }));
          setData((prev) => ({ ...prev, apiData: resObj }));
          localStorage.setItem("api_data", JSON.stringify(resObj));
        }

        setData((prev) => ({ ...prev, isLoading: false }));
      } catch (err) {
        setData((prev) => ({
          ...prev,
          isLoading: false,
          serverError: { message: "Session Expired" },
        }));
      }
    };
    fetchData();
  }, [id]);

  return [data, setData];
}

export default useFetch;
