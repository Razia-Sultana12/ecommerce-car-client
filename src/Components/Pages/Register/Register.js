import React from 'react';
import { Button, Container, Grid, TextField, Typography, CircularProgress,Alert} from '@mui/material';
import  { useState } from 'react';
import { NavLink } from 'react-router-dom';
import loginbg from '../../flaticons/bglog.jpg'
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData,setLoginData]=useState({});

    const { user, registerUser, isLoading, authError } = useAuth();
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
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <div>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <img sx={{width:"100%"}} src={loginbg} alt="" />  
  </Grid>
  <Grid sx={{mt:8}} item xs={12} md={6}>
  <Typography variant="h4" gutterBottom color="info.main">
        Please Register
    </Typography>
    {!isLoading && <form onSubmit={handleLoginSubmit}>
    
        <TextField
          label="Name"
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
          label="Re-enter Your Password"
          name="password2"
          type="password"
          onChange={handleOnChange}
          sx={{width:'90%' ,m:1}}
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />
        <Button type="submit" sx={{ bgcolor: 'info.main' ,color:"white",m:1 ,":hover":{bgcolor:"info.main"}}}>Register</Button>
        <NavLink style={{textDecoration:"none",display:'block'}} to="/login"><Button>Already Registered?Please Login</Button></NavLink>

    </form>}
    {isLoading && <CircularProgress />}
    {user?.email && <Alert severity="success">Congrats!You have successfully registered!</Alert>}
    {authError && <Alert severity="error">{authError}</Alert>}
  </Grid>
     
  </Grid> 
        </div>
    );
};

export default Register;