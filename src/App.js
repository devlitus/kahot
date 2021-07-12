import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from './components/header'
import { AppRoute } from './route/route'

export const App = () => {
  return (  
    <Router>
      <div>
      <Header />
      <AppRoute />
      </div>
    </Router>
  )
}
