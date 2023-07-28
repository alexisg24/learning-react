import { useCalendarStore, useUiStore } from '../../Hooks'

export const FabDelete = () => {
  const { startDeletingEvent, hasEventSelected } = useCalendarStore()
  const { isDateModalOpen } = useUiStore()
  const handleClickDelete = () => {
    startDeletingEvent()
  }

  if (!hasEventSelected || isDateModalOpen) return null
  return (
    <button
      aria-label='btn-delete'
      className='btn btn-danger fab-danger'
      onClick={handleClickDelete}
    >
      <i className='fas fa-trash-alt' />
    </button>
  )
}
