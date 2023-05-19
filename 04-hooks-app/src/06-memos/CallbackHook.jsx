import { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

const CallbackHook = () => {
  const [counter, setCounter] = useState(10)

  const incrementFather = useCallback((value = 1) => { setCounter(prev => prev + value) }, [])

  return (
    <>
      <h1>UseCallbackHook: {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  )
}

export { CallbackHook }
