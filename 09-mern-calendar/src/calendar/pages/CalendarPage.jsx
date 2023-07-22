import { Calendar } from 'react-big-calendar'
import { addHours } from 'date-fns'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { getMessagesES, localizer } from '../../helpers'
import { CalendarEvent, CalendarModal, Navbar } from '../index'
import { useState } from 'react'

const events = [{
  title: 'Birthday',
  notes: 'Buy a Cake',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: 1234,
    userName: 'Alexis'
  }
}]

export const CalendarPage = () => {
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
    console.log({ doubleClick: event })
  }

  const onSelect = (event) => {
    console.log({ Click: event })
  }

  const onViewChange = (event) => {
    window.localStorage.setItem('lastView', event)
    setLastView(event)
  }

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
    </>
  )
}
