import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Divider, Typography } from '@mui/material';
import ReviewUi from '../ReviewUi/ReviewUi';






const ReviewsUi = () => {
    const [reviewsUi,setReviewsUi]=useState([]);
    useEffect(() => {
        fetch('https://fierce-peak-59128.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviewsUi(data));
    },[])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{textAlign:'center',fontWeight:'500',color:'rebeccapurple',m:3}} variant='h4'>Our Customers Review</Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
        {reviewsUi.map(reviewUi=><ReviewUi
        key={reviewUi._id}
        reviewUi={reviewUi}></ReviewUi>)}
      </Grid>
      </Container>
    </Box>
    );
};

export default ReviewsUi;