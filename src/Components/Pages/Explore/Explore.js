import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

import Explor from './Explor/Explor';



const Explore = () => {
    const [explore,setExplore]=useState([]);
    useEffect(() => {
        fetch('https://fierce-peak-59128.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setExplore(data));
    },[])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
        {explore.map(explor=><Explor
        key={explor.title}
        explor={explor}></Explor>)}
      </Grid>
      </Container>
    </Box>
    );
};

export default Explore;