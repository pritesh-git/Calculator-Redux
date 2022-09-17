import { configureStore } from '@reduxjs/toolkit'
import calsiReducer from './calsiReducer'
export default configureStore({
  reducer: {
    calsiEvent: calsiReducer,
  },
})
