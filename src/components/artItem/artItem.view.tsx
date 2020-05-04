import React from 'react';
import { Object } from '../../actions';
import { Image, Box } from 'grommet';

const ArtItem = ({ item }: { item: Object }) => {
  return (
    <Box height="small" width="small">
      <Image fit="cover" src={item.primaryImageSmall} />
    </Box>
  );
};

export default ArtItem;
