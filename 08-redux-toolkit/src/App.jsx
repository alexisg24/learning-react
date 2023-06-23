import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementBy, reset } from './store/slices/counter'

function App () {
  const { counter } = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const handleClick = (fn, action = '') => dispatch(fn(action))
  return (
    <>
      <div>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>count is {counter}</h1>
      <div className='card'>
        <button onClick={() => handleClick(increment)}>
          Increment
        </button>
        <button onClick={() => handleClick(decrement)}>
          Decrement
        </button>
        <button onClick={() => handleClick(incrementBy, 3)}>
          Increment By 3
        </button>
        <button onClick={() => handleClick(reset)}>
          Reset
        </button>
      </div>
    </>
  )
}

export default App
