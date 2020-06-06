import React from 'react';
import { Grid } from '../search/components/grid';
import { Text } from 'grommet';
import Link from '../link';

const FavoritesView = ({ favorites }: { favorites: number[] }) => {
  return favorites.length ? (
    <Grid items={favorites} />
  ) : (
    <Text alignSelf="center" margin={{ horizontal: 'medium' }}>
      You don’t have any favorite art pieces yet. Let’s find some{' '}
      <Link to="/" color="accent-1">
        here
      </Link>
      !
    </Text>
  );
};

export default FavoritesView;
