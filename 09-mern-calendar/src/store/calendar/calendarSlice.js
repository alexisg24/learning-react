import { createSlice } from '@reduxjs/toolkit'
// const tempEvent = {
//   _id: new Date().getTime(),
//   title: 'Birthday',
//   notes: 'Buy a Cake',
//   start: new Date(),
//   end: addHours(new Date(), 2),
//   bgColor: '#fafafa',
//   user: {
//     _id: 1234,
//     userName: 'Alexis'
//   }
// }
export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    isLoadingEvents: true,
    events: [],
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
      state.events = state.events.map(event => (event.id === payload.id) ? payload : event)
      state.activeEvent = null
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(event => event.id !== state.activeEvent.id)
        state.activeEvent = null
      }
    },
    onLoadEvents: (state, { payload = [] }) => {
      state.isLoadingEvents = false
      payload.forEach(actualEvent => {
        const exist = state.events.some(event => event.id === actualEvent.id)
        if (!exist) { state.events.push(actualEvent) }
      })
    },
    onClearCalendar: (state) => {
      state.isLoadingEvents = true
      state.events = []
      state.activeEvent = null
    }
  }
})

// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent, onLoadEvents, onClearCalendar } = calendarSlice.actions
