import { createSlice } from '@reduxjs/toolkit'
import { addHours } from 'date-fns'
const tempEvent = {
  _id: new Date().getTime(),
  title: 'Birthday',
  notes: 'Buy a Cake',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: 1234,
    userName: 'Alexis'
  }
}
export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: [tempEvent],
    activeEvent: null
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload)
      state.activeEvent = null
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map(event => (event._id === payload._id) ? payload : event)
      state.activeEvent = null
    }
  }
})

// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent } = calendarSlice.actions