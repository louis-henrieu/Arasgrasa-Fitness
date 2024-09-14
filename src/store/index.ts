// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import invoice from 'src/store/apps/invoice'
import permissions from 'src/store/apps/permissions'

export const store = configureStore({
  reducer: {
    invoice,
    permissions
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
