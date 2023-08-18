import { useState } from "react";

export function useFetch(inputtedData, headers, method = "POST") {
  const [data, setData] = useState(inputtedData);
  const [processing, setProcessing] = useState(false);

  function handleSetData(key, value) {
    setData({ ...data, [key]: value });
  }

  async function fetch(endpoint) {
    let result;

    setProcessing(true);

    try {
      const response = await fetch(endpoint, {
        method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...headers,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        result = await response.json();
      } else {
        result = { status: response.status };
      }

      setProcessing(false);

      return result;
    } catch (e) {
      setProcessing(false);

      return { status: 500 };
    }
  }

  function reset() {
    setData(inputtedData);
  }

  return {
    data,
    setData: handleSetData,
    fetch,
    processing,
    reset,
  };
}
