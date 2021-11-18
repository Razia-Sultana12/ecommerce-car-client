
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography,Checkbox,TextField,Box,CardActionArea,FormControlLabel } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../../../hooks/useAuth';
import { CheckBox } from '@mui/icons-material';


const Order = () => {
  
  
  
  const { orderId } = useParams();
    const [purchase, setPurchase] = useState({});
    const { user } = useAuth();

    useEffect(() => {
      fetch(`http://localhost:5000/cars/${orderId}`)
          .then(res => res.json())
          .then(data=>setPurchase(data))
  }, [orderId]);

  const {_id,title,description,image,price} = {purchase};
  
  const { register, handleSubmit} = useForm();
      const onSubmit = data => {
        
           fetch("http://localhost:5000/orders", {
                 method: "POST",
                 headers: { "content-type": "application/json" },
                 body: JSON.stringify(data),
             })
             .then((res) => res.json())
             .then((data) => {
             console.log(data);
             if(data.insertedId){
              alert("Congrats!Order Added Successfully.")
          }
     })
            }
                
    return (

       <Container>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
       <Grid item xs={12} md={6}>
       <Card sx={{ maxWidth: 345,margin:10 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={purchase.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {purchase.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {purchase.description}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Price: {purchase.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> 
                    
          </Grid>
         <Grid item xs={12} md={6}> 
         <Typography color='info.main' margin='5' variant='h4'>Delivery Information</Typography>          
         <form sx={{margin:15}} onSubmit={handleSubmit(onSubmit)}>
         <TextField sx={{width:'75%',marginY:'20px'}} id="filled-basic" label="title" variant="filled" defaultValue={title} {...register("title", { required: true })}  />
         <TextField sx={{width:'75%'}} id="filled-basic" label="price" variant="filled" {...register("price", { required: true })} defaultValue={price} />
         <TextField sx={{width:'75%',marginY:'20px'}} id="filled-basic" label="Email" variant="filled" {...register("email", { required: true })} defaultValue={user?.email} 
                  />
      <TextField sx={{width:'75%',textAlign:'center'}} id="filled-basic" label="Name" variant="filled" {...register("name", { required: true })} defaultValue={user?.name}
               />
      <TextField sx={{width:'75%',marginY:'20px'}} id="filled-basic" label="Address" variant="filled" {...register("address", { required: true })}
              />
      <TextField sx={{width:'75%'}} id="filled-basic" label="Phone No" variant="filled" {...register("phonenum", { required: true })}
              />
      <TextField sx={{width:'75%',marginY:'20px'}} id="filled-basic" label="" type='date' variant="filled" {...register("date", { required: true })}
              />
              <Typography><FormControlLabel
          value="end"
          control={<Checkbox />}
          label=""
          labelPlacement="end"
        />Agree to our terms & conditions</Typography>
              <Button sx={{bgcolor:'info.main',color:'white',display:'block',":hover":{bgcolor:'info.main'}}} type="submit">Confirm</Button>
      </form>
              </Grid>
              </Grid>
    </Container>

    );
};

export default Order;




