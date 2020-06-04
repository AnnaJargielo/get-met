import React from 'react';
import Discovery from './discovery.view';
import { useObject } from '../../hooks';
import Loader from '../loader';
import { Box } from 'grommet';

const DiscoveryContainer = ({ id }: { id: number }) => {
  const [data, isLoading, error] = useObject(id);

  if (isLoading || data === undefined) {
    return (
      <Box alignSelf="center" justify="center" fill>
        <Loader />
      </Box>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <Discovery discovery={data!} />;
};

export default DiscoveryContainer;
