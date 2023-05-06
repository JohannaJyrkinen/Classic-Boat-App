import { createSlice } from "@reduxjs/toolkit"

export const tipSlice = createSlice({
    name: "tips",
    initialState: {
      tips: [],
    },
    reducers: {
      setTips: (state, action) => {
        state.tips = action.payload;
        console.log("Tips in store ", state.tips);
      },
    },
  });
  
  export const { setTips } = tipSlice.actions;
  
  export default tipSlice.reducer;