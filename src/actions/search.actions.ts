import { EnvVariables } from '../utils';
import queryString from 'query-string';

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

export const search = async ({ q, ...searchParams }: SearchParams = { q: '' }) => {
  const queryParams = queryString.stringify(searchParams);
  const response = await fetch(
    `${EnvVariables.API_URL}/public/collection/v1/search?q=${q}&${queryParams}`
  );

  if (response.status >= 400) {
    throw new Error(response.statusText);
  }

  return (await response.json()) as SearchResult;
};

export const searchDiscovery = async () => {
  const searchParams: SearchParams = {
    q: '',
    hasImages: true,
  };

  const { q, ...rest } = searchParams;

  const queryParams = queryString.stringify(rest);
  const response = await fetch(
    `${EnvVariables.API_URL}/public/collection/v1/search?q=${q}&${queryParams}`
  );

  if (response.status >= 400) {
    throw new Error(response.statusText);
  }

  return (await response.json()) as SearchResult;
};
