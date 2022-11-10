import { useLocation } from 'react-router-dom';
import { routes } from '../routes';

export const useCurrentPage = () => {
  const { pathname } = useLocation();

  const isRootPage = pathname === routes.HOME;

  return { isRootPage };
};
