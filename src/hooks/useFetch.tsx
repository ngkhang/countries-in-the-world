import { useState, useEffect } from 'react';
import Country from '~/types/Country';
import fetchApi from '~/utils/functions/fetchApi';

interface State {
  rawData: Country[] | [],
  loading: boolean,
  error: string
}

function useFetch(url: string) {
  const [data, setData] = useState<State>({
    rawData: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    fetchApi(url)
      .then((rawData) => {
        setData({
          rawData,
          loading: false,
          error: '',
        });
      })
      .catch(({ message }) => {
        setData({
          rawData: [],
          loading: false,
          error: message,
        });
      });
  }, [url]);

  return data;
}

export default useFetch;
