import { useEffect, useState } from "react";
// import axios from "axios";

export default function use3DAssets(message) {
  const [getData, setData] = useState({});

  useEffect(() => {
    if (!message) return;

    const postData = async () => {
      const payload = {
        message_body: message,
      };
      const url = `http://192.81.210.127:2222/prompt/message/`;
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const resObj = await response.json();
        setData(resObj.data);
        // if (status) {
        //   setData((prev) => ({ ...prev, isLoading: false }));
        //   setData((prev) => ({ ...prev, apiData: data, status: status }));
        // }

        // if status!== 200
        //     setData((prev) => ({ ...prev, isLoading: false }));
      } catch (err) {
        setData(err);
      }
    };

    postData();
  }, [message]);

  // return setdata
  return [getData];
}
