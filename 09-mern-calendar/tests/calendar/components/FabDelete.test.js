import { fireEvent, render, screen } from '@testing-library/react'
import { FabDelete } from '../../../src/calendar/components/FabDelete'
import { useCalendarStore } from '../../../src/Hooks/useCalendarStore'
import { useUiStore } from '../../../src/Hooks/useUiStore'

jest.mock('../../../src/Hooks/useCalendarStore')
jest.mock('../../../src/Hooks/useUiStore')
const mockStartDeletingEvent = jest.fn()

beforeEach(() => jest.clearAllMocks())
describe('Tests in <FabDelete />', () => {
  test('Should render the component', () => {
    useCalendarStore.mockReturnValue({ hasEventSelected: false })
    useUiStore.mockReturnValue({ isDateModalOpen: false })
    render(<FabDelete />)
    expect(document.querySelector('button')).toBeFalsy()
  })

  test('Should render the button if activeEvent is selected', () => {
    useCalendarStore.mockReturnValue({ hasEventSelected: true })
    render(<FabDelete />)
    expect(screen.getAllByLabelText('btn-delete')).toBeTruthy()
  })

  test('should call startDeletingEvent if exist activeEvent', () => {
    useCalendarStore.mockReturnValue({ hasEventSelected: true, startDeletingEvent: mockStartDeletingEvent })
    render(<FabDelete />)
    fireEvent.click(screen.getByLabelText('btn-delete'))
    expect(mockStartDeletingEvent).toHaveBeenCalled()
  })
})
