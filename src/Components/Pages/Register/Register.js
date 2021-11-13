import React from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import  { useState } from 'react';
import { NavLink } from 'react-router-dom';
import loginbg from '../../flaticons/bglog.jpg'

const Register = () => {
    const [loginData,setLoginData]=useState({})
    const handleOnChange=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);
      console.log(newLoginData);
    }
    const handleLoginSubmit=e=>{
        if(loginData.password !== loginData.password2){
            alert("Password didn't match");
            return
        }
        e.preventDefault();
    }
    return (
        <div>
            <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
            <img sx={{width:"100%"}} src={loginbg} alt="" />  
  </Grid>
  <Grid sx={{mt:8}} item xs={6} md={6}>
  <Typography variant="h4" gutterBottom color="info.main">
        Please Register
    </Typography>
    <form onSubmit={handleLoginSubmit}>
    
        <TextField
          label="Your Name"
          name="name"
          onChange={handleOnChange}
          sx={{width:'90%' ,m:1}}
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />
         <TextField
          label="Email"
          name="email"
          onChange={handleOnChange}
          sx={{width:'90%' ,m:1}}
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />
         <TextField
          label="Password"
          name="password"
          type="password"
          onChange={handleOnChange}
          sx={{width:'90%' ,m:1}}
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />
        <TextField
          label="Reenter Your Password"
          name="password2"
          type="password"
          onChange={handleOnChange}
          sx={{width:'90%' ,m:1}}
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />
        <Button onChange={handleLoginSubmit} sx={{ bgcolor: 'info.main' ,color:"white",m:1 ,":hover":{bgcolor:"info.main"}}}>Register</Button>
        <NavLink style={{textDecoration:"none",display:'block'}} to="/login"><Button>Already Registered?Please Login</Button></NavLink>

    </form>
  </Grid>
     
  </Grid> 
        </div>
    );
};

export default Register;