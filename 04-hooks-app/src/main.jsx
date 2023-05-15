import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HooksApp } from './HooksApp'
import { Memorize } from './06-memos/Memorize'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HooksApp />
    <Memorize />
  </React.StrictMode>
)
