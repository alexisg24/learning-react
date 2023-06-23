import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 10
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    decrement: (state) => {
      state.counter -= 1
    },
    incrementBy: (state, action) => {
      state.counter += action.payload
    },
    reset: (state) => {
      state.counter = initialState.counter
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementBy, reset } = counterSlice.actions
