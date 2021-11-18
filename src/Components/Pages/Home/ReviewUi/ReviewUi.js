import { Button, Divider, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { AccountCircle, Person, PersonPin,Star,StarIcon } from '@mui/icons-material';
import { fontSize } from '@mui/system';
import user from '../../../flaticons/user.png';





const ReviewUi = ({reviewUi}) => {
    const {name,comment,rating} = reviewUi;
    return (
      <>
        <Grid item xs={12} sm={12} md={4}>
           <Card sx={{ maxWidth: 345 ,textAlign:'center',bgcolor:'lightpurple',color:'white'}}>
      <CardActionArea>
        
        <CardContent>
          <Typography variant="h5" bgcolor='rebeccapurple' color="white">
            <AccountCircle/> {name}
          </Typography>
          <Divider />
          <Typography variant="h5" color="text.secondary">
            {comment}
          </Typography>
          <Star style={{color:'goldenrod'}}></Star><Star style={{color:'goldenrod'}}></Star><Star style={{color:'goldenrod'}}></Star>
          <Typography variant="h6" color="text.secondary">
          Rating : {rating}
          </Typography>
  
        </CardContent>
      </CardActionArea>
    </Card>  
        </Grid>
    
        </>
    );
};

export default ReviewUi;