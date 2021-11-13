import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import loginbg from '../../flaticons/bglog.jpg';

const Login = () => {
    const [loginData,setLoginData]=useState({})
    const handleOnChange=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);
      
    }
    const handleLoginSubmit=e=>{
        e.preventDefault();
    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
            <img sx={{width:"100%"}} src={loginbg} alt="" />  
  </Grid>
  <Grid sx={{mt:8}} item xs={6} md={6}>
  <Typography variant="h4" gutterBottom color="info.main">
        Please Login
    </Typography>
    <form onSubmit={handleLoginSubmit}>
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
        <Button sx={{ bgcolor: 'info.main' ,color:"white",m:1 ,":hover":{bgcolor:"info.main"}}}>Login</Button>
        <NavLink style={{textDecoration:"none",display:'block'}} to="/register"><Button>New User?Please Register</Button></NavLink>

    </form>
  </Grid>
     
  </Grid>
    );
};

export default Login;



