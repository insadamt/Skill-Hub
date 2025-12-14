import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    username: "admin",
    password: "admin",
    loggedIn : false,
  },
  reducers: {
    login: (state, action) => {
      state.loggedIn = action.payload
      }
    },
  }
)

export const { login } = adminSlice.actions;
export default adminSlice.reducer;
