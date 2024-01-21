import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
  name: 'chat',
  initialState: [],
  reducers: {
    message: (state, action) => {
      console.log('Dispatch');
      state.push(action.payload);
    },
  },
});

export const { message } = chatSlice.actions;
export default chatSlice.reducer;
