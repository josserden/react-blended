import { useEffect, useState } from 'react';
import * as API from '../api/cocktail-service';

export const useGetCocktails = () => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const getCocktails = async () => {
      setLoading(true);
      try {
        const response = await API.getTrendingCocktails();
        const normalizeResponse = response.map(
          (cocktail) => cocktail.drinks[0]
        );

        setCocktails(normalizeResponse);
        setSuccess(true);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getCocktails();
  }, []);

  return { cocktails, loading, success };
};
