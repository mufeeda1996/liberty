import React from 'react'
import { AppBar, Box, Grid, Toolbar, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const navItems = [
    {label:'Home', url:"/"},
    {label:'Products & Systems',url:"/"},
    { label:'Certificate',url:"/"},
    {label:'Contact Us',url:"/"},
    {label:'Submit a Request',url:"/"}
  ]
  const desktop = (
    <Box sx={{ backgroundColor: 'secondary.main', color: '#ffffff' }}>
      <AppBar position='static' sx={{backgroundColor:"#454545"}}>
        <Toolbar>
          <Grid container spacing={2} justifyContent='space-evenly'>
            {navItems.map((item, index) => {
              return (
                <>
                  <Grid item md={2} key={index}  sx={{cursor:"pointer"}}>
                    {item.label}
                  </Grid>
                </>
              )
            })}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
  return <>{isMobile ? null : desktop}</>
}

export default Navbar
