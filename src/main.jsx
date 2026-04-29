import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // Vite will find App.tsx automatically
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)