import React from 'react';
import { ObjectItem } from '../../../hooks';
import { Box, Text } from 'grommet';

const DiscoveryTitle = ({ discovery }: { discovery: ObjectItem }) => {
  return (
    <Box id="artwork-title" fill="horizontal" align="center" flex="grow">
      <Text>
        <Text weight="bold">{discovery.title}</Text>
        {discovery.artistDisplayName && ` by ${discovery.artistDisplayName}`}
        {discovery.objectDate && `, ${discovery.objectDate}`}
      </Text>
    </Box>
  );
};

export default DiscoveryTitle;
