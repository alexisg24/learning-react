import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { CalendarApp } from './CalendarApp.jsx'
import 'sweetalert2/dist/sweetalert2.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CalendarApp />
  </React.StrictMode>
)
