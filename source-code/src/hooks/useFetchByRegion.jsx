import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchByRegion } from 'service/country-service';
export const useFetchByRegion = () => {
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const region = searchParams.get('query');

    if (!region) return;

    setIsLoading(true);

    const getRegion = async () => {
      try {
        const data = await fetchByRegion(region);

        setCountries(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getRegion();
  }, [searchParams]);

  const onHandleSubmit = query => {
    setSearchParams({ query: query });
    setQuery(searchParams.get('query'));
  };

  return { countries, error, isLoading, onHandleSubmit };
};
