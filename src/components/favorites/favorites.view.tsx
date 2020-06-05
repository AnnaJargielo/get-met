import React from 'react';
import { Grid } from '../search/components/grid';

const FavoritesView = ({ favorites }: { favorites: number[] }) => {
  return <Grid items={favorites} />;
};

export default FavoritesView;
