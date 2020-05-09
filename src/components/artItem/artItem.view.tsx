import React from 'react';
import { ObjectItem } from '../../hooks';
import { Image, Box } from 'grommet';

const ArtItem = ({ item }: { item: ObjectItem }) => {
  return (
    <Box height="small" width="small">
      <Image fit="cover" src={item.primaryImageSmall} />
    </Box>
  );
};

export default ArtItem;
