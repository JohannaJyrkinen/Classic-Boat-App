import { configureStore } from '@reduxjs/toolkit'
import { boatSlice } from './boatSlice'


export const store = configureStore({
  reducer: {
    boats: boatSlice.reducer,
  },
})

export default store
