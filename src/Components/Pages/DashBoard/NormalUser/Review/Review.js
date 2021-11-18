import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Button, Typography } from '@mui/material';
import useAuth from '../../../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
      console.log(data);
      axios.post("https://fierce-peak-59128.herokuapp.com/reviews",data)
        .then(res => {
          if(res.data.insertedId){
            alert('Congrats,Review Added successfully!');
            reset();
          }
        })
       
    };
    return (
        <Box sx={{textAlign:'center'}} xs={12}
        >
            <Typography sx={{textAlign:'center',m:3,color:'info.main'}} variant='h4'>Want to Give Some Review?</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField sx={{width:'75%'}} id="filled-basic" label="name" variant="filled" {...register("name", { required: true })}
                   />
          <TextField sx={{width:'75%',marginY:'20px'}} id="filled-basic" label="Email" variant="filled" {...register("email", { required: true })} defaultValue={user?.email} 
                  />
          <TextField sx={{width:'75%'}} id="filled-basic" label="comment" variant="filled" {...register("comment", { required: true })}
                  />
          <TextField sx={{width:'75%',marginY:'20px'}} id="filled-basic" label="Rating" variant="filled" {...register("rating", { required: true })}
                  />
                  <Button sx={{bgcolor:'info.main',color:'white',display:'block',mx:'auto',":hover":{bgcolor:'info.main'}}} type="submit">Add Review</Button>
          </form>
          
        </Box>
    );
};

export default Review;