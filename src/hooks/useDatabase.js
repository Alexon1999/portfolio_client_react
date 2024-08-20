import { useEffect, useState, useMemo } from "react";
import axios from "../axios/axios";

function useDatabase(
  baseUrl,
  { method = "GET", queryParams = {}, payload = null, headers = {} } = {}
) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Memoize the objects to prevent unnecessary re-renders
  const memoizedQueryParams = useMemo(
    () => queryParams,
    [JSON.stringify(queryParams)]
  );
  const memoizedPayload = useMemo(() => payload, [JSON.stringify(payload)]);
  const memoizedHeaders = useMemo(() => headers, [JSON.stringify(headers)]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Build query string from memoizedQueryParams
        const queryString = new URLSearchParams(memoizedQueryParams).toString();
        const url = `${baseUrl}?${queryString}`;

        // Configure Axios request
        const config = {
          method,
          url,
          headers: memoizedHeaders,
          ...(memoizedPayload && { data: memoizedPayload }), // Include payload if provided
        };

        // Perform the request using the config object
        const response = await axios(config);

        setData(response.data);
      } catch (err) {
        console.log(err.response?.data?.msg);
        setError(err.response?.data?.msg || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [baseUrl, method, memoizedQueryParams, memoizedPayload, memoizedHeaders]);

  return { data, loading, error };
}

export default useDatabase;
