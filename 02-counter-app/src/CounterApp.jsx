import { useState } from 'react'
import PropType from 'prop-types'

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value)
  const handleAdd = () => {
    setCounter(counter + 1)
  }

  const handleSubstract = () => {
    setCounter(counter - 1)
  }

  const handleReset = () => {
    setCounter(value)
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <section>
        <button
          onClick={handleAdd}
        >
          +1
        </button>
        <button
          onClick={handleSubstract}
        >
          -1
        </button>
        <button
          onClick={handleReset}
        >
          Reset
        </button>
      </section>

    </>
  )
}

CounterApp.propTypes = {
  value: PropType.number.isRequired
}

CounterApp.defaultProps = {
  value: 0
}

export { CounterApp }
