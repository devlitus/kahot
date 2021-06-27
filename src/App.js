import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from './components/header'
import { Routes } from './route/route'
import './app.css';

export const App = () => {
  return (  
    <Router>
      <div>
      <Header />
      <Routes />
      </div>
    </Router>
  )
}
