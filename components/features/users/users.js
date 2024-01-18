import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "store",
  initialState: {
    users: null,
  },
  reducers: {
    save: (state, action) => {
      const { users } = action.payload;
      state.users = users;
    },
    saveFromDisk: (state, action) => {
      const { users } = action.payload;
      state.users = users;
    },
  },
});
export const { save, saveFromDisk } = usersSlice.actions;

export default usersSlice.reducer;
export const selectCurrentUsers = (state) => state.store.users;
