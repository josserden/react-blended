import { Section } from '../components/Section';
import { Loader } from '../components/Loader';
import { useCocktailDetail } from '../hooks/useCocktailDetail';
import { GoBackBtn } from '../components/GoBackBtn';
import { CocktailInfo } from '../components/CocktailInfo';
import { useLocation } from 'react-router-dom';
import { routes } from '../routes';

export const CocktailDetail = () => {
  const { cocktail, loading, success } = useCocktailDetail();
  const location = useLocation();

  const goBack = location?.state?.from ?? routes.HOME;

  return (
    <>
      {loading && <Loader />}

      {success && (
        <Section>
          <GoBackBtn path={goBack} />

          {cocktail && <CocktailInfo {...cocktail} />}
        </Section>
      )}
    </>
  );
};
