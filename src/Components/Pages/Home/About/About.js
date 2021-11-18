import { Container,Grid, Typography } from '@mui/material';
import React from 'react';
import aboutimg from '../../../flaticons/carbg.svg';
import bgpurple from '../../../flaticons/purplebg.jpg';

const About = () => {
    // const purple = {
    //     backgroundImage: `url(${bgpurple})`,
    //     backgroundAttachment: 'fixed',
    //     backgroundSize: 'cover',
    //     height:"100vh",
    //     marginTop: '15px',
    //     marginBottom: '35px'
    // }
    return (
        <Container >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={12} md={6}>
  <img
         style={{ width:400}} src={aboutimg} alt=""/>
       
  </Grid>
  <Grid item xs={12} md={6}>
    <Typography variant="h4" sx={{color:'rebeccapurple',fontWeight:'500',textAlign:'center'}}>About Us</Typography>
    <Typography sx={{color:'gray'}}>No Stress, No Pressure. Just Great Cars Delivered. Put Worry In Your Rearview - Driveway Offers a Worry-Free 7-Day Guarantee! Delivery W/ Purchase. Nationwide. Extensive Inventory. No-Haggle. Best Price Up Front. Worry Free Guarantee. Car Buying Online. Brands: Honda, Acura, BMW, Ford, Jeep, Lexus, Mercedes Benz, Subaru, Toyota.</Typography>
  </Grid>
  </Grid>

        </Container>
    );
};

export default About;