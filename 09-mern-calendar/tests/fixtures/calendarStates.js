export const events = [
  {
    id: '1',
    title: 'Birthday',
    notes: 'Buy a Cake',
    start: new Date('2022-10-21 13:00:00'),
    end: new Date('2022-10-21 15:00:00')
  },
  {
    id: '2',
    title: 'Task 2',
    notes: 'Some note',
    start: new Date('2022-10-23 13:00:00'),
    end: new Date('2022-10-23 15:00:00')
  }
]

export const initialCalendarState = {
  isLoadingEvents: true,
  events: [],
  activeEvent: null
}

export const calendarWithEventState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: null
}

export const calendarWithActiveEventState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: { ...events[0] }
}
