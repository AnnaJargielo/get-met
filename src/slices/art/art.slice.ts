import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  error: null,
  isLoading: false,
};

const artSlice = createSlice({
  name: 'art',
  initialState,
  reducers: {
    getArt(state) {
      state.isLoading = true;
    },
    getArtSuccess(state, action) {
      state.list = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    getArtFail(state, action) {
      state.list = [];
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getArt, getArtFail, getArtSuccess } = artSlice.actions;
export default artSlice.reducer;
