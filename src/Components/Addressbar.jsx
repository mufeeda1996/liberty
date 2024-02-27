import * as React from 'react'
import { useState } from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { Grid, useMediaQuery , IconButton,
    ListItemIcon,
    ListItemText,
    ListItem,Drawer} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import logo from '../../Image/logo12.png'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor:"#454545",
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#ffffff'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: '#ffffff',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  }
}))

export default function Addressbar ({address}) {
  const navItems=['HOME','ABOUT']
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const [openDrawer, setOpenDrawer] = useState(false)
  const [anchorEl, setAnchorEl] = useState('')
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const desktop = (
    <Grid container alignItems='center' justifyContent='space-evenly'>
      <Grid item md={2}>
        <Typography
          variant='h6'
          noWrap
          component='div'
          sx={{ display: { xs: 'none', sm: 'block',marginTop:"20px" } }}
        >
          <img src="" alt='logo' width='150px'></img>
        </Typography>
      </Grid>
      <Grid item md={4}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder='Search…'
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        {/* </Box> */}
      </Grid>

      {/* <Box sx={{ flexGrow: 1 }} />
         <Box sx={{ display: { xs: 'none', md: 'flex' } }}> */}
      <Grid item md={3}>
        <Box sx={{ color: 'black' }}>
        {/* <SmartphoneIcon/><Typography> 9876543210</Typography> */}
        <Box
            sx={{
              svg: { fontSize: "24px" },
              display: "flex",
              flexDirection: "row",
              // translate:"5px",
              margin: ".5rem 0",
              // padding: "5px",
            }}
          >
            <WhatsAppIcon sx={{ color: "primary.dark" }} />
            <Typography sx={{ fontSize: "17px", width: "150px" }}>
              {" "}
              +971 58 560 1448
            </Typography>
          </Box>
        {/* <MailIcon/>  <Typography> abc@gmail.com</Typography> */}
        <Box
            sx={{
              svg: { fontSize: "24px" },
              display: "flex",
              flexDirection: "row",
              // translate:"5px",
              margin: ".5rem 0",
              // padding: "5px",
            }}
          >
            <MailIcon sx={{ color: "primary.dark" }} />
            <Typography sx={{ fontSize: "17px", width: "250px" }}>
              {" "}
              sales@lhtech-me.com
            </Typography>
          </Box>
        </Box>
      </Grid>
      {/* <Grid item md={1}>
        <Typography>
          <LanguageDropdown />
        </Typography>
      </Grid> */}
      {/* </Box> */}
    </Grid>
  )

  let mobile = (
    <>
      <Grid
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Grid item>
          <Typography>
            <img src="" alt='logo' width={150} />
          </Typography>
        </Grid>
        {/* <Grid item>
            <Box sx={{color:"black"}}><SmartphoneIcon/> 987655432123</Box>
        </Grid> */}
        <Grid item>
          <IconButton edge='start' aria-label='menu' onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Grid>
      </Grid>

      <React.Fragment>
        <Drawer
          anchor='top'
          open={openDrawer}
          onClose={toggleDrawer}
          sx={{
            '& .MuiDrawer-paper': {
              height: 1500
            }
          }}
        >
          <Grid container>
            <Grid
              container
              direction='row'
              justifyContent='space-between'
              alignItems='center'
              padding={2}
              >
              <Grid item >
                <Typography>
                  <img src="" alt='logo' width={150} />
                </Typography>
              </Grid>
              {/* <Grid item  >
                <Typography>
                  98765433210
                </Typography>
              </Grid> */}
              <Grid item  >
                <IconButton onClick={toggleDrawer}>
                  <CloseIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Grid container spacing={1}  >
              {navItems.map((item, index) => (
                <Grid item key={index} xs={12}>
                  <ListItem>
                    <ListItemIcon>
                      {index === 0 ? (
                        <Accordion
                          sx={{
                            boxShadow: '0px 0px 0px 0px',
                            translate: '-15px'
                          }}
                        >
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography sx={{ fontWeight: 'bold',color:"black",margin:"0rem 3rem" }}>
                              {item}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails sx={{margin:"0rem 3rem"}}>
                            <Typography>
                              Top Brands
                            </Typography>
                            <Typography>
                              
                                All Brands
                              
                            </Typography>
                
                          </AccordionDetails>
                        </Accordion>
                      ) : (
                        <Typography
                          sx={{ color: "black", fontWeight: 'bold',margin:"0rem 3rem" }}
                          disablePadding
                          onClick={() => handleClick}
                        >
                          {item}
                        </Typography>
                      )}
                    </ListItemIcon>
                  </ListItem>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* <Grid item xs={12}>
            {address.map((item, index) => (
              <ListItem sx={{ color: '#A81D34', padding: '1rem 2rem' }}>
                {index === 0 && <LocationOnIcon />}
                {index === 1 && <LocationOnIcon />}
                {index === 2 && <SmartphoneIcon />}
                {index === 3 && <LocalPhoneIcon />}
                {index === 4 && <MailIcon />}

                <ListItemText
                  sx={{
                    color: '#A81D34'
                  }}
                >
                  {item}
                </ListItemText>
              </ListItem>
            ))}
          </Grid> */}
        </Drawer>
      </React.Fragment>
    </>
  )

  return (
    <Box>
      <AppBar position='static' sx={{backgroundColor:"#ffffff"}} >
        <Toolbar>{isMobile ? mobile : desktop}</Toolbar>
      </AppBar>
    </Box>
  )
}
