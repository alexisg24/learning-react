import { addHours, differenceInSeconds } from 'date-fns'
import { useState, useMemo, useEffect } from 'react'
import Modal from 'react-modal'
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import es from 'date-fns/locale/es'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { useCalendarStore, useUiStore } from '../../Hooks'
import { getEnvVariables } from '../../helpers'

registerLocale('es', es)

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

if (getEnvVariables().VITE_MODE !== 'test') {
  Modal.setAppElement('#root')
}
export const CalendarModal = () => {
  const { activeEvent, startSavingEvent, setActiveEvent } = useCalendarStore()
  const { isDateModalOpen, closeDateModal } = useUiStore()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formValues, setFormValues] = useState({
    title: '',
    notes: '',
    start: new Date(),
    end: addHours(new Date(), 5)
  })

  const titleClass = useMemo(() => {
    if (!formSubmitted) return ''
    if (formValues.title.length > 3) return ''
    return 'is-invalid'
  }, [formValues.title, formSubmitted])

  useEffect(() => {
    if (activeEvent) {
      setFormValues({ ...activeEvent })
    }
  }, [activeEvent])

  const onInputChanged = ({ target }) => {
    setFormValues(prevState => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  const onDateChange = (event, target) => {
    setFormValues(prevState => ({
      ...prevState,
      [target]: event
    }))
  }
  const onCloseModal = () => {
    setActiveEvent(null)
    closeDateModal()
  }

  const onSubmitForm = async (event) => {
    event.preventDefault()
    setFormSubmitted(true)
    const difference = differenceInSeconds(formValues.end, formValues.start)
    if (difference < 0 || isNaN(difference)) {
      Swal.fire({
        title: 'Error!',
        text: 'Invalid Dates',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
      return true
    }

    if (formValues.title.length <= 3) return true
    await startSavingEvent(formValues)
    closeDateModal()
    setFormSubmitted(false)
  }

  return (
    <Modal
      isOpen={isDateModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className='modal'
      overlayClassName='modal-fondo'
      closeTimeoutMS={200}
      contentLabel='Example Modal'
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className='container' onSubmit={onSubmitForm}>

        <div className='form-group mb-2'>
          <label>Fecha y hora inicio</label>

          <DatePicker
            locale='es'
            selected={formValues.start}
            className='form-control'
            onChange={(date) => onDateChange(date, 'start')}
            dateFormat='Pp'
            showTimeSelect
            timeCaption='Hora'
          />
        </div>

        <div className='form-group mb-2'>
          <label>Fecha y hora fin</label>
          <DatePicker
            locale='es'
            minDate={formValues.start}
            selected={formValues.end}
            className='form-control'
            onChange={(date) => onDateChange(date, 'end')}
            dateFormat='Pp'
            showTimeSelect
            timeCaption='Hora'
          />
        </div>

        <hr />
        <div className='form-group mb-2'>
          <label>Titulo y notas</label>
          <input
            type='text'
            className={`form-control ${titleClass}`}
            placeholder='Título del evento'
            name='title'
            autoComplete='off'
            value={formValues.title}
            onChange={onInputChanged}
          />
          <small id='emailHelp' className='form-text text-muted'>Una descripción corta</small>
        </div>

        <div className='form-group mb-2'>
          <textarea
            type='text'
            className='form-control'
            placeholder='Notas'
            rows='5'
            name='notes'
            value={formValues.notes}
            onChange={onInputChanged}
          />
          <small id='emailHelp' className='form-text text-muted'>Información adicional</small>
        </div>

        <button
          type='submit'
          className='btn btn-outline-primary btn-block'
        >
          <i className='far fa-save' />
          <span> Guardar</span>
        </button>

      </form>
    </Modal>
  )
}
