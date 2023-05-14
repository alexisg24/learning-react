import { useState } from 'react'

const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  })

  const { counter1, counter2, counter3 } = counter
  console.log(counter)
  return (
    <>
      <h1>Counter 1: {counter1} </h1>
      <h1>Counter 2: {counter2} </h1>
      <h1>Counter 3: {counter3} </h1>
      <hr />
      <button
        onClick={() => setCounter(prev => ({ ...prev, counter1: prev.counter1 + 1 }))}
        className='btn'
      >+1
      </button>
    </>
  )
}

export { CounterApp }
