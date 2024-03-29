import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { getMessagesES, localizer } from '../../helpers'
import { CalendarEvent, CalendarModal, FabAddNew, FabDelete, Navbar } from '../index'
import { useEffect, useState } from 'react'
import { useUiStore, useCalendarStore } from '../../Hooks'

export const CalendarPage = () => {
  const { events, setActiveEvent, startLoadingEvent } = useCalendarStore()
  const { openDateModal } = useUiStore()
  const [lastView, setLastView] = useState(window.localStorage.getItem('lastView') || 'week')
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }
    return {
      style
    }
  }

  const onDoubleClick = (event) => {
    openDateModal()
  }

  const onSelect = (event) => {
    setActiveEvent(event)
  }

  const onViewChange = (event) => {
    window.localStorage.setItem('lastView', event)
    setLastView(event)
  }

  useEffect(() => {
    startLoadingEvent()
  }, [])

  return (
    <>
      <Navbar />
      <h1>CalendarPage</h1>
      <div>
        <Calendar
          messages={getMessagesES()}
          culture='es'
          localizer={localizer}
          events={events}
          defaultView={lastView}
          startAccessor='start'
          endAccessor='end'
          style={{ height: 'calc(100vh - 150px)' }}
          eventPropGetter={eventStyleGetter}
          components={{
            event: CalendarEvent
          }}
          onDoubleClickEvent={onDoubleClick}
          onSelectEvent={onSelect}
          onView={onViewChange}
        />
      </div>
      <CalendarModal />
      <FabAddNew />
      <FabDelete />
    </>
  )
}
