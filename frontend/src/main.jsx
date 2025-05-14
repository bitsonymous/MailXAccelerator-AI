import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Auth0Provider
      domain="dev-x30t5c0a442kzuqt.us.auth0.com"
      clientId="DfbkfwjbskHOl73RbU5njb83yz4E1GLf"
      authorizationParams={{
        redirect_uri: window.location.origin + "/home",
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>,
)
