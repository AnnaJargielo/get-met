import { useContext } from 'react';
import { FavoritesContext } from '../components/app/context/favorites.context';

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);

  return context;
};
