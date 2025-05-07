import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Foodevent from './Component/Foodevent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Foodevent/>
  </StrictMode>,
)
