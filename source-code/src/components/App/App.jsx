import { Navigate, Route, Routes } from 'react-router-dom';

import { Header } from 'components';
import { CountrySearch, Home, Country } from 'pages';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index path="/" element={<Home />} />
          <Route path="/country" element={<CountrySearch />} />
          <Route path="/country/:id" element={<Country />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
