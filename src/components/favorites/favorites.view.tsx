import React from 'react';
import { Grid } from '../search/components/grid';

const FavoritesView = ({
  favorites,
  toggleFavorite,
}: {
  favorites: number[];
  toggleFavorite: (id: number) => void;
}) => {
  return <Grid items={favorites} />;
};

export default FavoritesView;
