import { Container,Grid, Typography } from '@mui/material';
import React from 'react';
import aboutimg from '../../../flaticons/carbg.svg';
import bgabt from '../../../flaticons/dashbg.jpg';

const About = () => {
    const bannerbg = {
        backgroundImage: `url(${bgabt})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        
    
    }
    return (
        <div style={bannerbg}>
            <Container>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={12} md={6}>
  <img
         style={{ width:400}} src={aboutimg} alt=""/>
       
  </Grid>
  <Grid item xs={12} md={6}>
    <Typography variant="h4" sx={{color:'info.main',fontWeight:'500',textAlign:'center'}}>About Us</Typography>
    <Typography sx={{color:'gray'}}>No Stress, No Pressure. Just Great Cars Delivered. Put Worry In Your Rearview - Driveway Offers a Worry-Free 7-Day Guarantee! Delivery W/ Purchase. Nationwide. Extensive Inventory. No-Haggle. Best Price Up Front. Worry Free Guarantee. Car Buying Online. Brands: Honda, Acura, BMW, Ford, Jeep, Lexus, Mercedes Benz, Subaru, Toyota.</Typography>
  </Grid>
  </Grid>
</Container>
        </div>
    );
};

export default About;