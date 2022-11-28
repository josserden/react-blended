import { CocktailsList } from '../components/CocktailsList';
import { Section } from '../components/Section';
import { Loader } from '../components/Loader';
import { useGetCocktails } from '../hooks/useGetCocktails';

export const Home = () => {
  const { cocktails, loading, success } = useGetCocktails();

  return (
    <>
      {loading && <Loader />}

      {success && (
        <Section>
          <h1 className='text-center font-black text-gray-700 text-4xl mb-10'>
            Trending cocktails
          </h1>

          <CocktailsList cocktails={cocktails} />
        </Section>
      )}
    </>
  );
};
