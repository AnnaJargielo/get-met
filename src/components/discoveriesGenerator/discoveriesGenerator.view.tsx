import React from 'react';
import { Box, Button } from 'grommet';
import { Refresh } from 'grommet-icons';
import { Discovery } from '../discovery';
import { style } from 'typestyle';
import styles from './discoveriesGenerator.styles';

const DiscoveriesGeneratorView = ({
  selectedId,
  selectNewDiscovery,
}: {
  selectedId: number;
  selectNewDiscovery: () => void;
}) => {
  return (
    <Box flex direction="column" align="center" pad="small">
      <Button
        primary
        size="medium"
        label="New Discovery"
        color="accent-1"
        icon={<Refresh />}
        reverse
        onClick={selectNewDiscovery}
        className={style(styles.newDiscoveryButton)}
      />

      <Discovery id={selectedId} />
    </Box>
  );
};

export default DiscoveriesGeneratorView;
