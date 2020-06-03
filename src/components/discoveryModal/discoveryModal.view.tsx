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
        <Carousel controls="arrows" fill>
          <Box height="large" width="large">
            <Image fit="contain" src={discovery.primaryImage} />
          </Box>
          {discovery.additionalImages.map((src, idx) => (
            <Box key={`${src}-${idx}`} height="large" width="large">
              <Image fit="contain" src={src} />
            </Box>
          ))}
        </Carousel>
      </Box>
    </Layer>
  );
};

export default DiscoveryModal;
