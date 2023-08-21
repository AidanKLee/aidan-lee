import { useState } from "react";

export function useFetch(inputtedData) {
  const [data, setData] = useState(inputtedData);
  const [processing, setProcessing] = useState(false);

  function handleSetData(key, value) {
    setData({ ...data, [key]: value });
  }

  async function get(endpoint, method = "POST", headers = {}) {
    let result;
    const formData = new FormData();

    setProcessing(true);

    for (let key in data) {
      formData.append(key, data[key]);
    }

    formData.append("_method", method);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "X-CSRF-Token": document
            .querySelector("meta[name='csrf-token']")
            .getAttribute("content"),
          ...headers,
        },
        body: formData,
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
    fetch: get,
    processing,
    reset,
  };
}
