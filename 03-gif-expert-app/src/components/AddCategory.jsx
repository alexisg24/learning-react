import { useState } from 'react'

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (inputValue.trim().length <= 1) return true
    onNewCategory(inputValue.trim())
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Search Gifs'
        value={inputValue}
        onChange={handleInputChange}
      />
      <button>Add</button>
    </form>
  )
}

export { AddCategory }
