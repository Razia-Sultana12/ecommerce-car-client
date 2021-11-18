import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import img from '../../../flaticons/blackimg.jpg';
import { FacebookRounded, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import { Typography,Container,TextField } from '@mui/material';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const Footer = () => {
  const aboutbg = {
    backgroundImage: `url(${img})`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    marginTop: '25px'
   
}
    return (
      <div style={aboutbg}> 
      <Container>
      <Box sx={{ width: '100%' }}>
      <Grid my='10px' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={3}>
          <Typography variant='h5' color='white'>About</Typography>
          <Typography color="lightgray">We provide best services in the city.Our products are always affordable for our users.</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
         <Typography variant='h5' color='white'>Contact</Typography>
         <Typography color='lightgray'>Address:Street road,California</Typography>
         <Typography color='lightgray'>Email:carplanet@gmail.com</Typography>
         <Typography color='lightgray'><AddIcCallIcon></AddIcCallIcon>Call Us : 0011233488</Typography>
         <Typography color='lightgray'><FacebookRounded></FacebookRounded><LinkedIn></LinkedIn><Instagram></Instagram><Twitter></Twitter><YouTube></YouTube></Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant='h5' color='white'>Useful Links</Typography>
          <Typography color='lightgray'>Home </Typography>
          <Typography color='lightgray'>Explore </Typography>
          <Typography color='lightgray'> About Us </Typography>
          <Typography color='lightgray'> Services</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant='h5' color='white'>Subscribe</Typography>
          <Typography color='lightgray'>Youtube | LinkedIn | Pinterest</Typography>
          <Typography color='lightgray'></Typography>
          
        </Grid>
        
      </Grid>
    </Box>
    <Typography color='lightgray' my='10px' textAlign='center'>Copyright © Carplanet. All rights reserved. Legal notice</Typography>
    </Container>
    </div>
   
    );
};

export default Footer;