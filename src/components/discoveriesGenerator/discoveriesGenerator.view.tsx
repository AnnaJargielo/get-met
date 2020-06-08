import { Box, Button } from 'grommet';
import { Refresh } from 'grommet-icons';
import React from 'react';
import { style } from 'typestyle';
import { Discovery } from '../discovery';
import styles from './discoveriesGenerator.styles';

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
        size="medium"
        label="New Discovery"
        color="accent-1"
        icon={<Refresh />}
        reverse
        onClick={selectNewDiscovery}
        className={style(styles.newDiscoveryButton)}
        margin={{ bottom: 'medium' }}
      />
      <Discovery id={selectedId} />
    </Box>
  );
};

export default DiscoveriesGeneratorView;
