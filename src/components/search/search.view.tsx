import React, { useState, useMemo } from 'react';
import { TextInput } from 'grommet';
import { Grid } from 'grommet';
import { useSearch, useDebounce } from '../../hooks';
import GridElement from './components/gridElement';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 1000);
  const [data] = useSearch({ q: debouncedValue, hasImages: true });
  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  // TODO remove slice
  const dataObjects = useMemo(() => {
    return data?.objectIDs?.slice(0, 6);
  }, [data]);

  return (
    <>
      <TextInput placeholder="type here" value={inputValue} onChange={onInputChange} />
      <Grid rows="small" columns="small" gap="large" margin="large">
        {dataObjects?.map((item, idx) => (
          <GridElement key={`${item}-${idx}`} gridItem={item} />
        ))}
      </Grid>
    </>
  );
};

export default Search;
