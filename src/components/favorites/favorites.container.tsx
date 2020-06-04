import React, { useContext } from 'react';
import FavoritesView from './favorites.view';
import { FavoritesContext } from '../app/context/favorites.context';

const FavoritesContainer = () => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  return <FavoritesView favorites={Array.from(favorites)} toggleFavorite={toggleFavorite} />;
};

export default FavoritesContainer;
