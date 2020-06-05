import React, { useCallback } from 'react';
import { Anchor, Button, Box, Carousel, Image, Layer, ResponsiveContext } from 'grommet';
import { ObjectItem } from '../../hooks';
import { Close } from 'grommet-icons';
import { DiscoveryTitle } from '../discovery';
import { FavoriteIcon } from '../icons';

const ResponsiveBox = ({ children }: { children: React.ReactNode }) => (
  <ResponsiveContext.Consumer>
    {(responsive) => {
      const breakpoint = responsive === 'small' ? 'medium' : responsive;
      return (
        <Box height={breakpoint} width={breakpoint} alignSelf="center">
          {children}
        </Box>
      );
    }}
  </ResponsiveContext.Consumer>
);

const DiscoveryModal = ({
  discovery,
  showDetails,
  setShow,
  isFavorite,
  onClickFavorite,
}: {
  discovery: ObjectItem;
  showDetails?: boolean;
  setShow: (open: boolean) => void;
  isFavorite: boolean;
  onClickFavorite: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}) => {
  const close = useCallback(() => {
    setShow(false);
  }, [setShow]);

  return (
    <Layer onEsc={close} onClickOutside={close}>
      <Button alignSelf="end" icon={<Close />} onClick={close} />
      {showDetails && (
        <Box margin={{ horizontal: 'medium' }}>
          <DiscoveryTitle discovery={discovery} />
        </Box>
      )}
      <Box align="center" pad="large">
        <Carousel controls="arrows" fill>
          <ResponsiveBox>
            <Image alt="Artwork image" fit="contain" src={discovery.primaryImage} />
          </ResponsiveBox>

          {discovery.additionalImages.map((src, idx) => (
            <ResponsiveBox key={`${idx}-${src}`}>
              <Image alt="Artwork additional image" fit="contain" src={src} />
            </ResponsiveBox>
          ))}
        </Carousel>
      </Box>
      {showDetails && (
        <Box margin="medium" flex direction="row" justify="between" align="start">
          <Anchor href={`/object/${discovery.objectID}`}>Learn more...</Anchor>
          <FavoriteIcon filled={isFavorite} onClick={onClickFavorite} isButton />
        </Box>
      )}
    </Layer>
  );
};

export default DiscoveryModal;
