import { calendarSlice, onAddNewEvent, onSetActiveEvent, onUpdateEvent } from '../../../src/store/calendar/calendarSlice'
import { calendarWithActiveEventState, calendarWithEventState, events, initialCalendarState } from '../../fixtures/calendarStates'

describe('Tests in calendarSlice', () => {
  test('should return default values', () => {
    const state = calendarSlice.getInitialState()
    expect(state).toEqual(initialCalendarState)
  })

  test('should set active event', () => {
    const state = calendarSlice.reducer(calendarWithEventState, onSetActiveEvent(events[0]))
    expect(state).toEqual(calendarWithActiveEventState)
    expect(state.activeEvent).toEqual(events[0])
  })

  test('onAddNewEvent should add the event', () => {
    const newEvent = {
      id: '3',
      title: 'Task 3',
      notes: 'Some note',
      start: new Date('2022-10-24 13:00:00'),
      end: new Date('2022-10-24 15:00:00')
    }

    const state = calendarSlice.reducer(initialCalendarState, onAddNewEvent(newEvent))
    expect(state.events.includes(newEvent)).toBeTruthy()
  })

  test('onUpdateEvent should update the event', () => {
    const newEvent = {
      id: '1',
      title: 'New Title',
      notes: 'Some note',
      start: new Date('2022-10-24 13:00:00'),
      end: new Date('2022-10-24 15:00:00')
    }

    const state = calendarSlice.reducer(calendarWithEventState, onUpdateEvent(newEvent))
    expect(state.events.find(event => event.title === newEvent.title)).toBeTruthy()
    expect(state.events).toContain(newEvent)
  })
})
