import {createSlice, PayloadAction} from '@reduxjs/toolkit';



const baseSlice = createSlice({
  name: 'state',
  initialState: {
    message: 'Initial message',
  },
  reducers: {
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
  },
});

export const {setMessage} = baseSlice.actions;
export default baseSlice.reducer;

