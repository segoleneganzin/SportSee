import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        console.log(err);
        setError(true);
        setErrorMessage(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { isLoading, data, error, errorMessage };
};
