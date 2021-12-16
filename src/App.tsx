import React from 'react'
import Router from './routes'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className="app">
      <Router />
      <ToastContainer />
    </div>
  )
}

export default App
