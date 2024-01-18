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
      console.log(state.users, 1);
    },
  },
});
export const { save, saveFromDisk } = usersSlice.actions;

export default usersSlice.reducer;
export const selectCurrentUsers = (state) => state.store.users;
