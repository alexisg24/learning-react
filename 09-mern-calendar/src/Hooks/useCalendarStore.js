import { useDispatch, useSelector } from 'react-redux'
import { onAddNewEvent, onSetActiveEvent, onUpdateEvent } from '../store/calendar/calendarSlice'

export const useCalendarStore = () => {
  const dispatch = useDispatch()
  const { events, activeEvent } = useSelector(state => state.calendar)
  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent))
  }

  const startSavingEvent = async (calendarEvent) => {
    // TODO: llegar al backend

    //* All good
    if (calendarEvent._id) {
      // update
      dispatch(onUpdateEvent({ ...calendarEvent }))
    } else {
      // create
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }))
    }
  }
  return {
    //* Props
    events,
    activeEvent,

    //* Methods
    setActiveEvent,
    startSavingEvent
  }
}
