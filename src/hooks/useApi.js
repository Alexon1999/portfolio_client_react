import { useEffect, useState, useMemo } from "react";
import axios from "../axios/axios";

function useApi(
  baseUrl,
  {
    method = "GET",
    queryParams = {},
    payload = null,
    headers = {},
    urlParams = {},
  } = {}
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
  const memoizedUrlParams = useMemo(
    () => urlParams,
    [JSON.stringify(urlParams)]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Build query string from memoizedQueryParams
        const queryString = new URLSearchParams(memoizedQueryParams).toString();

        // Build the final URL with urlParams
        let finalUrl = baseUrl;

        // Append urlParams to the baseUrl (e.g., baseUrl/:id)
        for (const [key, value] of Object.entries(memoizedUrlParams)) {
          finalUrl = finalUrl.replace(`:${key}`, value);
        }

        // Add query string to final URL if queryParams exist
        const url = queryString ? `${finalUrl}?${queryString}` : finalUrl;

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
  }, [
    baseUrl,
    method,
    memoizedQueryParams,
    memoizedPayload,
    memoizedHeaders,
    memoizedUrlParams,
  ]);

  return { data, loading, error };
}

export default useApi;
