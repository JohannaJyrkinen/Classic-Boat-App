import { configureStore } from '@reduxjs/toolkit'
import { boatSlice } from './boatSlice'
import { tipSlice } from './tipSlice'

export const store = configureStore({
  reducer: {
    boats: boatSlice.reducer,
    tips: tipSlice.reducer,
  },
})

export default store
