import queryString from 'query-string';
import { useDataApi } from './useDataApi';
import { useEffect } from 'react';

export interface SearchParams {
  q: string;
  departmentId?: number;
  hasImages?: boolean;
  isHighlight?: boolean;
  isOnView?: boolean;
  artistOrCulture?: boolean;
  medium?: string;
  geoLocation?: string;
  dateBegin?: number;
  dateEnd?: number;
}

export interface SearchResult {
  total: number;
  objectIDs: number[];
}

export const useSearch = (
  { q, ...searchParams }: SearchParams = { q: '' }
): [SearchResult | undefined, boolean, Error | null] => {
  const queryParams = queryString.stringify(searchParams);
  const url = `/search?q=${q}&${queryParams}`;

  const [{ data, isLoading, error }, setUrl] = useDataApi<SearchResult>(url);

  useEffect(() => {
    setUrl(url);
  }, [url, setUrl]);
  return [data, isLoading, error];
};
