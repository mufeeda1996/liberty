
import { Box } from '@mui/system'
import React from 'react'
import Addressbar from './Components/Addressbar'
import LocationSelector from './Components/Ex'
import Apps from './Components/Ex'
import Navbar from './Components/Header'
import OptionWHR from './Components/OptionWHR'
import TireSearch from './TireSearch'

const App = () => {
  return (
    <>
      
     <Box sx={{width:"100%",minHeight:"300px", backgroundColor: 'rgba(255, 255, 255, 0.5)', // rgba(255, 255, 255, 0) for fully transparent
    // padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}>
     <OptionWHR/>
     </Box>
    
    </>
  )
}

export default App