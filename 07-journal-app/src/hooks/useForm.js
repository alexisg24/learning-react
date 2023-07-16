import { useEffect, useMemo, useState } from 'react'

const useForm = (initialForm = {}, formValidation = {}) => {
  const [formState, setFormState] = useState(initialForm)
  const [formValidated, setFormValidated] = useState({})

  useEffect(() => {
    createValidators()
  }, [formState])

  useEffect(() => {
    setFormState(initialForm)
  }, [initialForm])

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const onResetForm = () => {
    setFormState(initialForm)
  }

  const createValidators = () => {
    const formCheckedValues = {}
    for (const formField of Object.keys(formValidation)) {
      const [fn, errorMessage = 'Validation Error'] = formValidation[formField]
      formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage
    }
    setFormValidated(formCheckedValues)
  }

  const isFormValid = useMemo(() => {
    return !Object.values(formValidated).some(validations => validations !== null)
  }, [formValidated])

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    ...formValidated,
    isFormValid
  }
}

export { useForm }
