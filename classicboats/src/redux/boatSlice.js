import { createSlice } from "@reduxjs/toolkit"

export const boatSlice = createSlice({
    name: "boats",
    initialState: {
      boats: [],
    },
    reducers: {
      setBoats: (state, action) => {
        state.boats = action.payload;
        console.log("Boats in store ", state.boats);
      },
    },
  });
  
  export const { setBoats } = boatSlice.actions;
  
  export default boatSlice.reducer;