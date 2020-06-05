import React, { useContext } from 'react';
import Discovery from './discovery.view';
import { useObject } from '../../hooks';
import Loader from '../loader';
import { Box } from 'grommet';
import { FavoritesContext } from '../app/context/favorites.context';

const DiscoveryContainer = ({ id }: { id: number }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const onClickFavorite = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    toggleFavorite(id);
  };

  const [data, isLoading, error] = useObject(id);

  if (isLoading || data === undefined) {
    return (
      <Box alignSelf="center" justify="center" fill>
        <Loader />
      </Box>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Discovery discovery={data!} isFavorite={favorites.has(id)} onClickFavorite={onClickFavorite} />
  );
};

export default DiscoveryContainer;
