import { Link, useLocation } from 'react-router-dom';
import { Grid, GridItem } from 'components';
import { routes } from '../../routes';

export const CountryList = ({ countries }) => {
  const location = useLocation();

  return (
    <>
      <Grid>
        {countries &&
          countries.map(({ id, country, flag }) => (
            <GridItem key={id}>
              <Link to={`${routes.COUNTRY}/${id}`} state={{ from: location }}>
                <img src={flag} alt={country} />
              </Link>
            </GridItem>
          ))}
      </Grid>
    </>
  );
};
