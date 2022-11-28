import { useEffect, useState } from 'react';
import * as API from '../api/cocktail-service';
import { useSearchParams } from 'react-router-dom';

export const useSearchCocktail = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isEmpty, setIsEmpty] = useState(false);
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    const findCocktails = async () => {
      setLoading(true);

      try {
        const { drinks } = await API.searchByName(query);

        if (!drinks) {
          setIsEmpty(true);
          return;
        }

        setCocktails(drinks);
        setSuccess(true);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    findCocktails();
  }, [query, isEmpty]);

  const handleFormSubmit = (value) => {
    setSearchQuery(value);
    setSearchParams({ query: value.trim() });
    setIsEmpty(false);
    setCocktails([]);
  };

  return {
    searchQuery,
    cocktails,
    loading,
    success,
    isEmpty,
    handleFormSubmit,
  };
};
