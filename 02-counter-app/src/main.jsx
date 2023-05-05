import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './HelloWorldApp'
import { FirstApp } from './FirstApp'
import './styles.css'
import { CounterApp } from './CounterApp'

ReactDOM
  .createRoot(document.querySelector('#root'))
  .render(
    <React.StrictMode>
      {/* <App /> */}
      <FirstApp title='Hello World!' subTitle='And this is a subtitle' name={'I\'m Alexis'} />
      {/* <CounterApp value={0} /> */}
    </React.StrictMode>
  )
