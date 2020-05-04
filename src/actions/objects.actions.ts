import { EnvVariables } from '../utils';

export interface Objects {
  total: number;
  objectIDs: Array<number>;
}

export const fetchObjects = async () => {
  const response = await fetch(
    `${EnvVariables.API_URL}/public/collection/v1/objects?departmentIds=1`
  );

  if (response.status >= 400) {
    throw new Error(response.statusText);
  }

  return (await response.json()) as Objects;
};
