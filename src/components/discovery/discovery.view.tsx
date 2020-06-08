import { Box, Image } from 'grommet';
import React, { useState } from 'react';
import { ObjectItem } from '../../hooks';
import { Details } from '../details';
import { DiscoveryModal } from '../discoveryModal';
import { DiscoveryTitle } from './components';
import { style } from 'typestyle';

const DiscoveryView = ({
  discovery,
  isFavorite,
  onClickFavorite,
}: {
  discovery: ObjectItem;
  isFavorite: boolean;
  onClickFavorite: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box direction="column" align="center" fill="horizontal" pad="small">
      <DiscoveryTitle discovery={discovery} />

      <Box width="auto" height="medium" align="center" justify="center" pad="small">
        <Image
          alt="Artwork image"
          className={style({ cursor: 'pointer' })}
          fit="contain"
          src={discovery.primaryImageSmall}
          onClick={() => setIsModalOpen(true)}
        />
      </Box>
      <Box id="artwork-details" fill="horizontal">
        <Details discovery={discovery} setIsModalOpen={setIsModalOpen} />
      </Box>
      {isModalOpen && (
        <DiscoveryModal
          discovery={discovery}
          setShow={setIsModalOpen}
          isFavorite={isFavorite}
          onClickFavorite={onClickFavorite}
        />
      )}
    </Box>
  );
};

export default DiscoveryView;
