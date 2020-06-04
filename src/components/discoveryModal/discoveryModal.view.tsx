import React, { useCallback } from 'react';
import { Layer, Box, Carousel, Image, Button } from 'grommet';
import { ObjectItem } from '../../hooks';
import { Close } from 'grommet-icons';
import { DiscoveryTitle } from '../discovery';

const DiscoveryModal = ({
  discovery,
  showDetails,
  setShow,
}: {
  discovery: ObjectItem;
  showDetails?: boolean;
  setShow: (open: boolean) => void;
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
      {showDetails && (
        <Box margin="medium">
          <Button onClick={() => {}}>Learn more</Button>
        </Box>
      )}
    </Layer>
  );
};

export default DiscoveryModal;
