import React, { useState } from 'react';
import Search from './search.view';
import { useDebounce, useSearch } from '../../hooks';

const SearchContainer = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 1000);
  const [data, isLoading] = useSearch({ q: debouncedValue, hasImages: true });

  return <Search isLoading={isLoading} setQuery={setInputValue} query={inputValue} result={data} />;
};

export default SearchContainer;
