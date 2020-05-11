import React, { useState } from 'react';
import { TextInput } from 'grommet';
import { useSearch, useDebounce } from '../../hooks';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 1000);
  const [data, isLoading, error] = useSearch({ q: debouncedValue, hasImages: true });
  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <>
      <TextInput placeholder="type here" value={inputValue} onChange={onInputChange} />
      {data?.objectIDs.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </>
  );
};

export default Search;
