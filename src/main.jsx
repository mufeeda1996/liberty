import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material'


const theme = createTheme({
  palette: {
    primary: {
      main: '#454545'
    },
    secondary: {
      main: '#454545'
    },

    error: {
      main: '#d32f2f'
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
