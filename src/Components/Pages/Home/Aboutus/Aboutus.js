
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import bgimg from '../../../flaticons/purplebg.jpg';
import carbg from '../../../flaticons/tb.png';
const TopBanner = () => {
    const bannerbg = {
        backgroundImage: `url(${bgimg})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        height:"100vh",
        marginTop: '15px',
        marginBottom: '35px'
    }
    // const verticalCenter = {
    //     display: 'flex',
    //     alignItems: 'center',
    //     height: 400
    // }
    return (
        <div style={bannerbg}>
           <Container  >
               <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
           <Grid item xs={12} md={6}  >
                    <img style={{ width: '350px' }}  alt="" />
                </Grid>
            
                <Grid item style={{ textAlign: 'center',color:'rebeccapurple' }} xs={12} md={6}>
                    <Box>
                        <Typography sx={{}} variant="h3">
                            Welcome To<br />
                            Carplanet
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                            Your journey starts here.We are always working for make you journey comfortable and memorable.Your comfortablity & safety is our promise.Keep smiling & keep traveling with the most comfortable & luxurious car!
                        </Typography>
                        <Link to='/explore'><Button variant="contained" style={{ backgroundColor: 'rebeccapurple',color:'white',borderColor:'blueviolet' }}>Explore More</Button></Link>
                    </Box>
                </Grid>
                

            </Grid>
        </Container>
        </div>
        
    );
};

export default TopBanner;