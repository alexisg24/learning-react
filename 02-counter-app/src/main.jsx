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
      {/* <App />
      <FirstApp title={'I\'m Alexis'} subTitle='And this is a subtitle' /> */}
      <CounterApp value={0} />
    </React.StrictMode>
  )
