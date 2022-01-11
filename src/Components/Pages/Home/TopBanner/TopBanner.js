
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import bgimg from '../../../flaticons/loginBG.jpg';
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
    const verticalCenter = {
        display: 'flex',
        alignItems: 'center',
        height: 400
    }
    return (
        <div style={bannerbg} >
           <Container  sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography sx={{color:'white'}} variant="h3">
                            Welcome To<br />
                            Carplanet
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'lightgray' }}>
                            Your journey starts here.We are always working for make you journey comfortable and memorable.Your comfortablity & safety is our promise.Keep smiling & keep traveling with the most comfortable & luxurious car!
                        </Typography>
                        <Link to='/explore'><Button variant="contained" style={{ backgroundColor: 'white',color:'blueviolet',borderColor:'blueviolet' }}>Explore More</Button></Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter} >
                    <img style={{ width: '350px' }}  alt="" />
                </Grid>

            </Grid>
        </Container>
        </div>
    );
};

export default TopBanner;