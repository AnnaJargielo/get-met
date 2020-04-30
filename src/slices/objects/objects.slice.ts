import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { Objects, fetchObjects } from '../../actions';

export interface ObjectsState {
  data: undefined | null | Objects;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: SerializedError | null;
}

const initialState: ObjectsState = {
  data: undefined,
  loading: 'idle',
  error: null,
};

const objectsSlice = createSlice({
  name: 'objects',
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: (builder) => {
    builder.addCase(fetchObjects.pending, (state, action) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchObjects.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = 'succeeded';
    });
    builder.addCase(fetchObjects.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.error;
    });
  },
});

export const ObjectsReducer = objectsSlice.reducer;
