import { createAsyncThunk } from '@reduxjs/toolkit';

export interface Objects {
  total: number;
  objectIDs: Array<number>;
}

export const fetchObjects = createAsyncThunk<Objects>('objects/fetch', async () => {
  const response = await fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=1`
  );

  if (response.status >= 400) {
    throw new Error(response.statusText);
  }

  return (await response.json()) as Objects;
});
