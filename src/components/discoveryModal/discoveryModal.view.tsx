import React from 'react';
import { Layer, Box, Carousel, Image } from 'grommet';
import { ObjectItem } from '../../hooks';

const DiscoveryModal = ({
  discovery,
  setShow,
}: {
  discovery: ObjectItem;
  setShow: (open: boolean) => void;
}) => {
  return (
    <Layer onEsc={() => setShow(false)} onClickOutside={() => setShow(false)}>
      <Box align="center" pad="large">
        <Carousel initialChild={0}>
          <Box height="large" width="auto">
            <Image fit="contain" src={discovery.primaryImage} />
          </Box>
          {discovery.additionalImages.map((src) => (
            <Box height="large" width="auto">
              <Image fit="contain" src={src} />
            </Box>
          ))}
        </Carousel>
      </Box>
    </Layer>
  );
};

export default DiscoveryModal;
