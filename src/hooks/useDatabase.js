import { useEffect, useState } from 'react';

import axios from '../axios/axios';

function useDatabase(category) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/projects/category/${category}`);
        //  'http://192.168.0.25:5000/projects'

        setData(data);
      } catch (err) {
        console.log(err.response?.data?.msg);
      }
    };

    fetchData();
  }, [category]);

  return data;
}

export default useDatabase;
