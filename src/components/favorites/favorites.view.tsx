import React from 'react';
import { Grid } from '../search/components/grid';
import { Anchor, Text } from 'grommet';

const FavoritesView = ({ favorites }: { favorites: number[] }) => {
  return favorites.length ? (
    <Grid items={favorites} />
  ) : (
    <Text alignSelf="center" margin={{ horizontal: 'medium' }}>
      You don’t have any favorite art pieces yet. Let’s find some{' '}
      <Anchor color="accent-1" href="/">
        here
      </Anchor>
      !
    </Text>
  );
};

export default FavoritesView;
