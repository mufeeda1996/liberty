import React,{useState} from 'react'
import { AppBar, Box, Grid, Toolbar, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import TireSearch from '../TireSearch';

// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

function HomeScreen() {
    return (
      <div>
        <TireSearch/>
      </div>
    );
  }

function OtherScreen() {
    return (
      <div>
        <h1>This is the Other Screen</h1>
        {/* Add any other content for your other screen */}
      </div>
    );
  }
const OptionWHR = () => {
    const [showHomeScreen, setShowHomeScreen] = useState(true);
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const [currentScreen, setCurrentScreen] = useState('home');

  const screens = {
    home: <HomeScreen />,
    other: <OtherScreen />,
  };

  const handleClick = (screen) => {
    setCurrentScreen(screen);
  };

  const navItems = [
    { label: 'Search By Size', id: 'home' },
    { label: 'Search By Name', id: 'other' },
  ];

  const desktop = (
    <>
    <Box sx={{ backgroundColor: 'secondary.main', color: '#ffffff' }}>
      <AppBar position='static' sx={{backgroundColor:"#89071C"}}>
        <Toolbar>
          <Grid container spacing={2} justifyContent='space-evenly'>
            {navItems.map((item, index) => {
              return (
                <>
                  <Grid item md={2} key={item.id} onClick={() => handleClick(item.id)}   sx={{cursor:"pointer",fontFamily:"sans-serif"}}>
                    {item.label}
                  </Grid>
                </>
              )
            })}
          </Grid>
         
        </Toolbar>
      </AppBar>
    </Box>
    <br></br>
    {screens[currentScreen]}
    </>
  )
  return <>{ desktop}</>
}

export default OptionWHR
