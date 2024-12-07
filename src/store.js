import { configureStore, createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
});


export const { addUser } = userSlice.actions;

export const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
});
