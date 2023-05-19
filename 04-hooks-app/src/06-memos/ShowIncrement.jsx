import React from 'react'

const ShowIncrement = React.memo(({ increment }) => {
  console.log('Me volvi a generar')
  return (
    <button
      className='btn btn-primary'
      onClick={() => increment(3)}
    >Increment
    </button>
  )
})

export { ShowIncrement }
