import React, { useState, useCallback, useContext } from 'react';
import { useObject } from '../../../../../hooks';
import { Text, Image, Box, Button } from 'grommet';
import { style } from 'typestyle';
import { Expand } from 'grommet-icons';
import { DiscoveryModal } from '../../../../discoveryModal';
import Loader from '../../../../loader';
import { FavoritesContext } from '../../../../app/context/favorites.context';

const GridElementContainer = React.forwardRef(({ objectId }: { objectId: number }, ref: any) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const [data, isLoading, error] = useObject(objectId);
  const [hover, setHover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickFavorite = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    toggleFavorite(objectId);
  };

  const enter = useCallback(() => {
    setHover(true);
  }, [setHover]);

  const leave = useCallback(() => {
    setHover(false);
  }, [setHover]);

  const expand = useCallback(() => {
    setIsModalOpen(!isModalOpen);
    setHover(false);
  }, [isModalOpen]);

  return (
    <Box
      onMouseEnter={enter}
      onMouseLeave={leave}
      className={style({ position: 'relative' })}
      ref={ref}
      justify="center"
    >
      {error && (
        <Text alignSelf="center" color="#E4032B">
          Artwork not found
        </Text>
      )}
      {isLoading && <Loader />}
      {!isLoading && !error && data && <Image fit="contain" src={data?.primaryImageSmall} />}
      {hover && (
        <Box
          className={style({ position: 'absolute' })}
          fill
          background={{ color: 'dark-1', opacity: 0.3 }}
          justify="center"
          align="center"
        >
          <Button onClick={expand}>
            <Expand color="white" size="large" a11yTitle="Expand image" />
          </Button>
        </Box>
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
  );
});

export default GridElementContainer;
