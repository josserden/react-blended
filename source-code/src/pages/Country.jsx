import { Link, useLocation, Navigate } from 'react-router-dom';

import { Section, Container, CountryInfo, Loader } from 'components';
import { useFetchCountry } from 'hooks';

export const Country = () => {
  const { country, error, isLoading } = useFetchCountry();
  const location = useLocation();
  const goBackLink = location?.state?.from ?? '/';

  const { id, flag, capital, countryName, population, languages } = country;

  return (
    <Section>
      <Container>
        <div
          style={{
            marginBottom: '60px',
            color: '#f2f2f2',
            letterSpacing: '0.06em',
            textDecoration: 'underline',

            borderColor: 'gray',
          }}
        >
          <Link to={goBackLink}>Back to Countries</Link>
        </div>

        {isLoading && <Loader />}

        {error && <Navigate to={'/'} replace />}

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
