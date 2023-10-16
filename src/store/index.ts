// https://redux-toolkit.js.org/api/createSlice
// https://redux-toolkit.js.org/api/configureStore
import { configureStore, createSlice } from '@reduxjs/toolkit'

// https://react-redux.js.org/using-react-redux/usage-with-typescript
import {useSelector, TypedUseSelectorHook} from 'react-redux'

const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Fazer café', 'Estudar Redux', 'Estudar Zustand'],

  reducers: {
    // são as actions, ou seja, todas as ações que o usuário pode fazer para alterar alguma informação dentro do estado
    add: (state, action) => {
      // state é o que já está no estado
      // action contem o type e o payload
      
      state.push(action.payload.newTodo)
    }
  }
})

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  }
})

// exportando o action
export const { add } = todoSlice.actions


// Integração com TS
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector