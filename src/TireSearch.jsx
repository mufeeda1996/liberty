import { Box,Button,Grid,Typography } from '@mui/material';
import { tiresData } from './assets/Data/data';
import React, { useState } from 'react';

const TireSearch = () => {
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [rimSize, setRimSize] = useState('');
    const [location, setLocation] = useState('');
    const [filteredTires, setFilteredTires] = useState([]);
  
    const handleSearch = () => {
      // Filter the tires based on the selected criteria
      const filtered = tiresData.filter(tire => {
        return tire.width === width && tire.height === height && tire.rimSize === rimSize && tire.location === location;
      });
  
      setFilteredTires(filtered);
    };

  return (
    <>
    
    <Box sx={{width:{md:"70%",xs:"100%"},height:"100px",margin:"auto",display:"flex",flexDirection:{md:"row",xs:"column"} , justifyContent:{md:"center"},alignItems:"center"}}>
    
      <select value={width} onChange={e => setWidth(e.target.value)} style={{width:"100px",height:"40px",borderRadius:"10px",backgroundColor:"#89071C",color:"#ffffff"}}>
        <option value="">Select Width</option>
        <option value="180">180</option>
        <option value="190">190</option>
        <option value="205">205</option>
        <option value="215">215</option>
        <option value="225">225</option>
      </select>
     
      <select value={height} onChange={e => setHeight(e.target.value)}  style={{width:"100px",height:"40px",borderRadius:"10px",backgroundColor:"#89071C",color:"#ffffff"}}>
        <option value="">Select Height</option>
        <option value="50">50</option>
        <option value="55">55</option>
        <option value="60">60</option>
        <option value="65">65</option>
      </select>
      
      <select value={rimSize} onChange={e => setRimSize(e.target.value)}  style={{width:"100px",height:"40px",borderRadius:"10px",backgroundColor:"#89071C",color:"#ffffff"}}>
        <option value="">Select Rim Size</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
      </select>
      
      <select value={location} onChange={e => setLocation(e.target.value)}  style={{width:"100px",height:"40px",borderRadius:"10px",backgroundColor:"#89071C",color:"#ffffff"}}>
        <option value="">Select Location</option>
        <option value="Abu Dhabi">Abu Dhabi</option>
        <option value="Dubai">Dubai</option>
        <option value="Asia">Asia</option>
      </select>
      
      <button onClick={handleSearch} style={{width:"100px",height:"40px",borderRadius:"10px",marginLeft:{md:"10px",xs:"0"},backgroundColor:"#89071C",color:"#ffffff"}}>Search</button>
      
      </Box>
    
        <Grid container>
          {filteredTires.map(tire => (
           
             <>
                <Grid item xs={12} md={4} sx={{ padding: '1rem' }}>
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#ffffff',
                      padding: '10px',
                      backdropFilter: 'blur(100px)',
                      boxShadow: '#89071c 1px 2px 5px '
                    }}
                  >
                    <Box
                      sx={{
                        // backgroundColor: "primary.main",

                        // borderRadius: '69px',
                        width: '20rem',
                        height: '5rem',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        margin: '.5rem auto'
                        // margin:"2rem 2rem"
                      }}
                    >
                      <img width='40%' height="100px" src={tire.imageUrl} alt='safety' />
                    </Box>
                    <Typography
                      variant='h5'
                      sx={{
                        // paddingTop: '3rem ',
                        color: '#000000',
                        fontFamily: 'PFDin Text,Arial,sans-serif',
                        fontWeight: '300',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        margin: '.3rem .8rem',
                        fontWeight:"bold"
                      }}
                    >
                   { tire.brand}
                    </Typography>
                     <Typography
                      variant='h6'
                      sx={{
                        // paddingTop: '3rem ',
                        color: '#000000',
                        fontFamily: 'PFDin Text,Arial,sans-serif',
                        fontWeight: '300',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        margin: '.1rem 1.2rem',
                        fontSize:".8rem"
                      }}
                    >
                     {`Width: ${tire.width}, Height: ${tire.height}, Rim Size: ${tire.rimSize}`}
                    </Typography>
                    <Typography
                      variant='h5'
                      sx={{
                        // paddingTop: '3rem ',
                        color: '#000000',
                        fontFamily: 'PFDin Text,Arial,sans-serif',
                        fontWeight: '300',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        margin: '.3rem .8rem',
                        fontWeight:"bold"
                      }}
                    >
                     $100
                    </Typography>
                    <Box>
                    <Button sx={{width:"200px",height:"40px",borderRadius:"10px",marginLeft:"10px",backgroundColor:"#89071C",color:"#ffffff"}}>Add To Cart</Button>
                  </Box>
                  </Box>
                 
                </Grid>
               
            </>
             ))}
             </Grid>
         
      {/* </div> */}
    </>
  );
};

export default TireSearch;
