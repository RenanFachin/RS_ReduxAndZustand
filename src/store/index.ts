// https://redux-toolkit.js.org/api/createSlice
// https://redux-toolkit.js.org/api/configureStore
import { configureStore, createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Fazer café', 'Estudar Redux', 'Estudar Zustand'],

  reducers: {
    // são as actions, ou seja, todas as ações que o usuário pode fazer para alterar alguma informação dentro do estado
    add: (state, action) => {
      // state é o que já está no estado
      // action contem o type e o payload
      console.log(state, action)
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