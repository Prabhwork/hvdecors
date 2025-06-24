import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: localStorage.getItem("name") || "",
    email: localStorage.getItem("email") || "",
    phoneno: localStorage.getItem("phoneno") || "",
  };
  
  const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      login: (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.phoneno = action.payload.phoneno;
  
        localStorage.setItem("name", action.payload.name);
        localStorage.setItem("email", action.payload.email);
        localStorage.setItem("phoneno", action.payload.phoneno);
      },
      logout: (state) => {
        state.name = "";
        state.email = "";
        state.phoneno = "";
  
        localStorage.clear();
      },
    },
  });
  

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
