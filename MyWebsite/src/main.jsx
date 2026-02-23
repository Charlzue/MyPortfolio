import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/components.css'
import './css/main.css'
import './css/sections.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
