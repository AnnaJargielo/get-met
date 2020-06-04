import { Box, Image, TextInput } from 'grommet';
import React, { useMemo } from 'react';
import { SearchResult } from '../../hooks';
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
        <Image src={process.env.PUBLIC_URL + '/loader.svg'} />
      ) : (
        <Grid items={(result?.objectIDs || []).slice(0, 100)} />
      ),
    [isLoading, result]
  );

  return (
    <Box width="large">
      <Box margin={{ bottom: 'medium' }}>
        <TextInput placeholder="type here" value={query} onChange={onInputChange} />
      </Box>

      {content}
    </Box>
  );
};

export default Search;
