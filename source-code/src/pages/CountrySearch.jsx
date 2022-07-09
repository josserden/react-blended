import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useFetchByRegion } from 'hooks';

export const CountrySearch = () => {
  const { countries, error, isLoading, onHandleSubmit } = useFetchByRegion();

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onHandleSubmit} />

        {error && (
          <Heading textAlign="center">Something went wrong ...</Heading>
        )}

        {isLoading && <Loader />}

        {countries && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
