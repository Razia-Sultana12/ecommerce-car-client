import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Divider, Typography } from '@mui/material';
import Explor from '../../Explore/Explor/Explor';
import Car from '../Car/Car';





const Cars = () => {
    const [cars,setCars]=useState([]);
    useEffect(() => {
        fetch('https://fierce-peak-59128.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setCars(data));
    },[])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{textAlign:'center',fontWeight:'500',color:'rebeccapurple',m:3}} variant='h4'>Our New Collections</Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
        {cars.slice(0,6).map(car=><Car
        key={car.title}
        car={car}></Car>)}
      </Grid>
      </Container>
    </Box>
    );
};

export default Cars;