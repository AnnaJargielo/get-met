import React, { useState } from 'react';
import { ObjectItem } from '../../hooks';
import { Image, Button, Box, Text } from 'grommet';
import { Refresh, Expand, Favorite } from 'grommet-icons';
import Details from '../details/details.view';
import { DiscoveryModal } from '../discoveryModal';

const DiscoveryView = ({
  discovery,
  newDiscoveryClick,
}: {
  discovery: ObjectItem;
  newDiscoveryClick: () => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box flex direction="column" align="center">
      <Button
        primary
        size="small"
        label="New Discovery"
        icon={<Refresh />}
        reverse
        onClick={newDiscoveryClick}
      />
      <Text>{discovery.title}</Text>
      <Box width="auto" height="medium" round="small" align="center" justify="center">
        <Image
          fit="contain"
          src={discovery.primaryImageSmall}
          onClick={() => setIsModalOpen(true)}
        />
      </Box>
      <Box>
        <Text>{discovery.artistNationality}</Text>
        <Text>{discovery.department}</Text>
        <Expand onClick={() => setIsModalOpen(true)} />
        <Favorite />
      </Box>
      <Details discovery={discovery} />
      {isModalOpen && <DiscoveryModal discovery={discovery} setShow={setIsModalOpen} />}
    </Box>
  );
};

export default DiscoveryView;
