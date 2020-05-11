import React from 'react';
import { Box, Button } from 'grommet';
import { Refresh } from 'grommet-icons';
import { Discovery } from '../discovery';

const DiscoveriesGeneratorView = ({
  selectedId,
  selectNewDiscovery,
}: {
  selectedId: number;
  selectNewDiscovery: () => void;
}) => {
  return (
    <Box flex direction="column" align="center">
      <Button
        primary
        size="small"
        label="New Discovery"
        icon={<Refresh />}
        reverse
        onClick={selectNewDiscovery}
      />

      <Discovery id={selectedId} />
    </Box>
  );
};

export default DiscoveriesGeneratorView;
