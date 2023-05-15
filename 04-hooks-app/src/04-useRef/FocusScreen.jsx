import { useRef } from 'react'

const FocusScreen = () => {
  const inputRef = useRef()
  const handleClick = () => {
    inputRef.current.select()
    // document.querySelector('input').select()
  }
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        type='text'
        placeholder='Type your name'
        className='form-control mt-2'
      />
      <input
        type='text'
        placeholder='Type your name'
        className='form-control mt-2'
      />
      <input
        type='text'
        placeholder='Type your name'
        className='form-control mt-2'
      />
      <input
        type='text'
        placeholder='Type your name'
        className='form-control mt-2'
      />
      <button
        className='btn btn-primary mt-2'
        onClick={handleClick}
      >Set Focus
      </button>
    </>
  )
}

export { FocusScreen }
