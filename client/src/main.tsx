import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router } from "react-router-dom"
import AppRouter from './AppRouter'
import Auth0ProviderWithPopup from './auth/Auth0ProviderwithPopUp'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithPopup>
        <AppRouter/>
      </Auth0ProviderWithPopup>
    </Router>
  </React.StrictMode>
)
