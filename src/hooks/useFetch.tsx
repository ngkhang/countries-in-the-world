import { useState, useEffect } from 'react';
import Country from '~/types/Country';
import fetchApi from '~/utils/functions/fetchApi';

interface State {
  rawData: Country[] | null,
  loading: boolean,
  error: string | null
}

function useFetch(url: string) {
  const [data, setData] = useState<State>({
    rawData: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetchApi(url)
      .then((rawData) => {
        setData({
          rawData,
          loading: false,
          error: null,
        });
      })
      .catch(({ message }) => {
        setData({
          rawData: null,
          error: message,
          loading: false,
        });
      });
  }, [url]);

  return data;
}

export default useFetch;
