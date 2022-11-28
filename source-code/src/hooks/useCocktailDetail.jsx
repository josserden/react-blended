import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as API from '../api/cocktail-service';
import { routes } from '../routes';

export const useCocktailDetail = () => {
  const [cocktail, setCocktail] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const { cocktailId } = useParams();

  useEffect(() => {
    const getCocktail = async () => {
      setLoading(true);

      try {
        const response = await API.getCocktailDetail(cocktailId);
        setCocktail(response);
        setSuccess(true);
      } catch (error) {
        console.error(error);
        navigate(routes.HOME, { replace: true });
      } finally {
        setLoading(false);
      }
    };

    getCocktail();
  }, []);

  return { cocktail, loading, success };
};
