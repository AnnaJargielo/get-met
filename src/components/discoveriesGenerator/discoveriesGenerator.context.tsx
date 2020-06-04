import React, { useState, useEffect, useCallback } from 'react';
import { SearchResult, useSearch } from '../../hooks';
import { getRandomInt } from '../../utils';
import DiscoveryGeneratorContainer from './discoveriesGenerator.container';
import Loader from '../loader';
import { Box } from 'grommet';

export interface DiscoveryState {
  searchResult: SearchResult;
  selectedId?: number;
  selectNewDiscovery: () => void;
}

const initialState: DiscoveryState = {
  searchResult: {
    objectIDs: [],
    total: 0,
  },
  selectedId: undefined,
  selectNewDiscovery: () => {
    throw new Error('method not implemented');
  },
};

export const DiscoveriesGeneratorContext = React.createContext<DiscoveryState>(initialState);

const DiscoveriesGeneratorContextProvider = () => {
  const [data, isLoading, error] = useSearch({ q: '', hasImages: true });

  const [selectedId, setSelectedId] = useState<number | undefined>();

  useEffect(() => {
    if (data?.total) {
      setSelectedId(data.objectIDs[getRandomInt(0, data.total - 1)]);
    }
  }, [data]);

  const selectNewDiscovery = useCallback(() => {
    if (data?.total) {
      setSelectedId(data.objectIDs[getRandomInt(0, data.total - 1)]);
    }
  }, [data]);

  if (isLoading || data === undefined || selectedId === undefined) {
    return (
      <Box alignSelf="center" justify="center" fill>
        <Loader />
      </Box>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <DiscoveriesGeneratorContext.Provider
      value={{ searchResult: data!, selectedId, selectNewDiscovery }}
    >
      <DiscoveryGeneratorContainer />
    </DiscoveriesGeneratorContext.Provider>
  );
};

export default DiscoveriesGeneratorContextProvider;
