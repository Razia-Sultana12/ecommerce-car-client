import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Button, Typography } from '@mui/material';

const AddProduct = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
      console.log(data);
      axios.post("http://localhost:5000/cars",data)
        .then((res) => {
          if(res.data.insertedId){
            alert('Congrats,You have added a new product successfully!');
            reset();
          }
        })
       
    };

    return (
        <Box sx={{textAlign:'center'}} xs={12}
    //   component="form"
    //   noValidate
    //   autoComplete="off"
    >
        <Typography sx={{textAlign:'center',m:3,color:'info.main'}} variant='h4'>Add More Products</Typography>
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField sx={{width:'75%'}} id="filled-basic" label="Add title" variant="filled" {...register("title", { required: true })}
               />
      <TextField sx={{width:'75%',marginY:'20px'}} id="filled-basic" label="Add description" variant="filled" {...register("description", { required: true })}
              />
      <TextField sx={{width:'75%'}} id="filled-basic" label="Add Price" variant="filled" {...register("price", { required: true })}
              />
      <TextField sx={{width:'75%',marginY:'20px'}} id="filled-basic" label="Add image url" variant="filled" {...register("image", { required: true })}
              />
              <Button sx={{bgcolor:'info.main',color:'white',display:'block',mx:'auto',":hover":{bgcolor:'info.main'}}} type="submit">Add Product</Button>
      </form>
      
    </Box>
    );
};

export default AddProduct;