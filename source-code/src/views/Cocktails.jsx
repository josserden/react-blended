import { SearchForm } from '../components/SearchForm';
import { Section } from '../components/Section';
import { CocktailsList } from '../components/CocktailsList';
import { Loader } from '../components/Loader';
import { useSearchCocktail } from '../hooks/useSearchCocktail';

export const Cocktails = () => {
  const {
    searchQuery,
    cocktails,
    loading,
    success,
    isEmpty,
    handleFormSubmit,
  } = useSearchCocktail();

  return (
    <>
      {loading && <Loader />}

      <Section>
        <SearchForm onSubmit={handleFormSubmit} />

        {isEmpty && (
          <h2 className='text-4xl font-bold text-center text-rose-800 mt-4'>
            ❌ Cocktails not found...
          </h2>
        )}

        {success && <CocktailsList cocktails={cocktails} />}
      </Section>
    </>
  );
};
