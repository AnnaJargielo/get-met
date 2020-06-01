import { Box, Image, Text } from 'grommet';
import { Expand, Favorite } from 'grommet-icons';
import React, { useState } from 'react';
import { ObjectItem } from '../../hooks';
import Details from '../details/details.view';
import { DiscoveryModal } from '../discoveryModal';

const DiscoveryView = ({ discovery }: { discovery: ObjectItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box flex direction="column" align="center">
      <Text>{discovery.title}</Text>
      <Text>{discovery.artistDisplayName}</Text>

      <Box width="auto" height="medium" align="center" justify="center">
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
