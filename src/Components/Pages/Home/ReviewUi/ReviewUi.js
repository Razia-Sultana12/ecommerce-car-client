import { Button, Divider, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { AccountCircle, Person, PersonPin } from '@mui/icons-material';
import { fontSize } from '@mui/system';





const ReviewUi = ({reviewUi}) => {
    const {name,comment,rating} = reviewUi;
    return (
      <>
        <Grid item xs={12} sm={12} md={4}>
           <Card sx={{ maxWidth: 345 ,textAlign:'center',bgcolor:'lightgray'}}>
      <CardActionArea>
        
        <CardContent>
          <Typography variant="h5" color="text.secondary">
            <AccountCircle/> {name}
          </Typography>
          <Divider />
          <Typography variant="h5" color="text.secondary">
            {comment}
          </Typography>
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