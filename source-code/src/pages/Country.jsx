import { Navigate, useLocation } from 'react-router-dom';

import { Container, CountryInfo, GoBackBtn, Loader, Section } from 'components';
import { useFetchCountry } from 'hooks';
import { routes } from 'routes';

export const Country = () => {
  const { country, error, isLoading } = useFetchCountry();
  const location = useLocation();
  const goBackLink = location?.state?.from ?? routes.HOME;

  const { id, flag, capital, countryName, population, languages } = country;

  return (
    <Section>
      <Container>
        <GoBackBtn path={goBackLink}> Back to Countries</GoBackBtn>

        {isLoading && <Loader />}

        {error && <Navigate to={routes.HOME} replace />}

        <CountryInfo
          key={id}
          flag={flag}
          capital={capital}
          country={countryName}
          population={population}
          languages={languages}
        />
      </Container>
    </Section>
  );
};
