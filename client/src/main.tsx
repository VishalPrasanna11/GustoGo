import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router } from "react-router-dom"
import AppRouter from './AppRouter'
import Auth0ProviderWithPopup from './auth/Auth0ProviderwithPopUp'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
    <QueryClientProvider client={queryClient}>
      <Auth0ProviderWithPopup>
        <AppRouter/>
      </Auth0ProviderWithPopup>
    </QueryClientProvider>
    </Router>
  </React.StrictMode>
)
