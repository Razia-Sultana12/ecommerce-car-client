import { Button, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { Link } from 'react-router-dom'



const Explor = ({explor}) => {
    const {_id,title,description,image,price} = explor;
    return (
      <>
        <Grid item xs={12} sm={12} md={4}>
           <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Price: {price}
          </Typography>
          <Link style={{ textDecoration: 'none' }} to={`/order/${_id}`}><Button sx={{bgcolor:"blueviolet",color:"white",":hover":{
       backgroundColor: "rebeccapurple",
    }}}>Buy Now</Button></Link>
        </CardContent>
      </CardActionArea>
    </Card>  
        </Grid>
        
        </>
    );
};

export default Explor;



