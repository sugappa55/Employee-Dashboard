import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthContext } from './contexts/authContext'
import { StatsContext } from './contexts/stats'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>  
    <AuthContext>    
      <StatsContext>  <App /></StatsContext>
</AuthContext>
</BrowserRouter>
  </React.StrictMode>
)
