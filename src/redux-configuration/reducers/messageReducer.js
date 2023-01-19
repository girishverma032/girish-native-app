import {createSlice} from '@reduxjs/toolkit';

export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    isLoading: false,
    records: [],
  },
  reducers: {
    getMessageFetch: state => {
      state.isLoading = true;
    },
    getMessageSuccess: (state, action) => {
      state.isLoading = false;
      state.records = action.payload;
    },
    getMessageFailure: state => {
      state.isLoading = false;
    },
  },
});

export const {getMessageFetch, getMessageSuccess, getMessageFailure} =
  messageSlice.actions;
export default messageSlice.reducer;
