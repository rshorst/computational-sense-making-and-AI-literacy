import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EntangledDimensionsConnection from "./EntangledDimensionsConnection.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EntangledDimensionsConnection />
  </StrictMode>,
)
