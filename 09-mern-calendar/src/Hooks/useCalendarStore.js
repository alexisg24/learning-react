import { useDispatch, useSelector } from 'react-redux'
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from '../store/calendar/calendarSlice'
import { calendarApi } from '../api'
import { convertDates } from '../helpers/convertDates'
import Swal from 'sweetalert2/dist/sweetalert2'

export const useCalendarStore = () => {
  const dispatch = useDispatch()
  const { events, activeEvent } = useSelector(state => state.calendar)
  const { user } = useSelector(state => state.auth)

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent))
  }

  const startSavingEvent = async (calendarEvent) => {
    try {
      if (calendarEvent.id) {
        await calendarApi.put(`/events/${calendarEvent.id}`, { ...calendarEvent })
        dispatch(onUpdateEvent({ ...calendarEvent, user }))
        return true
      }
      const { data } = await calendarApi.post('/events', { ...calendarEvent })
      dispatch(onAddNewEvent({ ...calendarEvent, id: data.newEvent.id, user }))
    } catch (error) {
      const { response: { data } } = error
      if (!data?.errors) {
        Swal.fire('Failed to save event', data?.msg)
      } else {
        const { errors } = data
        const errorsMsg = Object.values(errors)
        Swal.fire('Failed to save event', errorsMsg)
      }
    }
  }

  const startDeletingEvent = async () => {
    try {
      await calendarApi.delete(`/events/${activeEvent.id}`)
      dispatch(onDeleteEvent())
    } catch (error) {
      const { response: { data } } = error
      if (!data?.errors) {
        Swal.fire('Failed to delete event', data?.msg)
      } else {
        const { errors } = data
        const errorsMsg = Object.values(errors)
        Swal.fire('Failed to delete event', errorsMsg)
      }
    }
  }

  const startLoadingEvent = async () => {
    try {
      const { data } = await calendarApi.get('/events')
      const parsedEvents = convertDates(data.events)
      dispatch(onLoadEvents(parsedEvents))
    } catch (error) {
      console.log('Error loading events')
      console.log({ error })
    }
  }

  return {
    //* Props
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,

    //* Methods
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
    startLoadingEvent
  }
}
