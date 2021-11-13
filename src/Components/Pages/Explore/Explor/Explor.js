import { Button, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import BuyModal from '../BuyModal/BuyModal';



const Explor = ({explor}) => {
    const {title,description,image,price} = explor;
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (
      <>
        <Grid item xs={2} sm={2} md={4}>
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
          <Button onClick={handleOpen} sx={{bgcolor:"blueviolet",color:"white",":hover":{
       backgroundColor: "rebeccapurple",
    }}}>Buy Now</Button>
        </CardContent>
      </CardActionArea>
    </Card>  
        </Grid>
        <BuyModal
        explor={explor}
          open={open}
          handleClose={handleClose}>
        </BuyModal>
        </>
    );
};

export default Explor;



