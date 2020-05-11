import { useEffect, useState } from 'react';

export const useDebounce = (inputValue: string, timeout: number = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(inputValue);
  useEffect(() => {
    const handle = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, timeout);
    return () => {
      clearTimeout(handle);
    };
  }, [inputValue, timeout]);

  return debouncedValue;
};
