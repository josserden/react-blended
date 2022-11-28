import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from 'components';
import { Country, CountrySearch, Home } from 'pages';
import { routes } from 'routes';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Header />}>
          <Route index element={<Home />} />
          <Route path={routes.COUNTRY} element={<CountrySearch />} />
          <Route path={routes.COUNTRY_ID} element={<Country />} />
        </Route>

        <Route path="*" element={<Navigate to={routes.HOME} replace />} />
      </Routes>
    </>
  );
};
