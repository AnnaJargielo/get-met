import { Box, Image, Text } from 'grommet';
import React, { useState } from 'react';
import { ObjectItem } from '../../hooks';
import Details from '../details/details.view';
import { DiscoveryModal } from '../discoveryModal';

const DiscoveryView = ({ discovery }: { discovery: ObjectItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box direction="column" align="center" fill="horizontal">
      <Box id="artwork-title" fill="horizontal" align="center" flex="grow" pad="xsmall">
        <Text>
          <b>{discovery.title}</b>
          {discovery.artistDisplayName && ` by ${discovery.artistDisplayName}`}
          {discovery.objectDate && `, ${discovery.objectDate}`}
        </Text>
      </Box>

      <Box width="auto" height="medium" align="center" justify="center" pad="small">
        <Image
          fit="contain"
          src={discovery.primaryImageSmall}
          onClick={() => setIsModalOpen(true)}
        />
      </Box>
      <Box id="artwork-details" fill="horizontal">
        <Details discovery={discovery} setIsModalOpen={setIsModalOpen} />
      </Box>
      {isModalOpen && <DiscoveryModal discovery={discovery} setShow={setIsModalOpen} />}
    </Box>
  );
};

export default DiscoveryView;
