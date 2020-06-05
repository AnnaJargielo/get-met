import { Box, TextInput } from 'grommet';
import React, { useMemo } from 'react';
import { SearchResult } from '../../hooks';
import Loader from '../loader';
import { Grid } from './components/grid';

interface Props {
  query: string;
  setQuery: (v: string) => void;
  isLoading: boolean;
  result: SearchResult | null | undefined;
}

const Search = ({ query, setQuery, isLoading, result }: Props) => {
  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  const content = useMemo(
    () =>
      isLoading || result === undefined ? (
        <Box alignSelf="center" justify="center" fill>
          <Loader />
        </Box>
      ) : (
        <Grid items={(result?.objectIDs || []).slice(0, 100)} />
      ),
    [isLoading, result]
  );

  return (
    <Box fill>
      <Box margin={{ bottom: 'medium' }}>
        <TextInput placeholder="type here" value={query} onChange={onInputChange} />
      </Box>
      {content}
    </Box>
  );
};

export default Search;
