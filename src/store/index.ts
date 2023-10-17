// https://redux-toolkit.js.org/api/createSlice
// https://redux-toolkit.js.org/api/configureStore
import { configureStore } from '@reduxjs/toolkit'

// https://react-redux.js.org/using-react-redux/usage-with-typescript
import {useSelector, TypedUseSelectorHook} from 'react-redux'

export const store = configureStore({
  reducer: {}
})

// Integração com TS
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector