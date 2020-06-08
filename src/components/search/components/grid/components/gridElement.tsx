import React, { useState, useCallback, useContext } from 'react';
import { useObject } from '../../../../../hooks';
import { Box, ThemeContext, Image, Text } from 'grommet';
import { style } from 'typestyle';
import { DiscoveryModal } from '../../../../discoveryModal';
import Loader from '../../../../loader';
import { FavoritesContext } from '../../../../app/context/favorites.context';

const hoverStyle = (color: string) => {
  return style({ $nest: { '&:hover': { backgroundColor: color } } });
};

const GridElementContainer = React.forwardRef(({ objectId }: { objectId: number }, ref: any) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const [data, isLoading, error] = useObject(objectId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickFavorite = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    toggleFavorite(objectId);
  };

  const expand = useCallback(() => {
    if (!isLoading) {
      setIsModalOpen(!isModalOpen);
    }
  }, [isModalOpen, isLoading]);

  return (
    <ThemeContext.Consumer>
      {(theme: any) => (
        <Box
          onClick={expand}
          className={hoverStyle(theme.global.colors['accent-2'])}
          justify="center"
        >
          {error && (
            <Text alignSelf="center" color="accent-1">
              Artwork not found
            </Text>
          )}
          {isLoading && <Loader />}
          {!isLoading && !error && data && (
            <Image alt="Artwork image" fit="contain" src={data?.primaryImageSmall} />
          )}
          {isModalOpen && (
            <DiscoveryModal
              showDetails={true}
              discovery={data!}
              setShow={setIsModalOpen}
              isFavorite={favorites.has(objectId)}
              onClickFavorite={onClickFavorite}
            />
          )}
        </Box>
      )}
    </ThemeContext.Consumer>
  );
});

export default GridElementContainer;
