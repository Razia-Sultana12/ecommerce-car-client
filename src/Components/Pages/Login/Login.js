import { Button, Container, Grid, TextField, Typography,Alert,CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginbg from '../../flaticons/bglog.jpg';

const Login = () => {
    const [loginData,setLoginData]=useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const handleOnBlur=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);
      
    }
    const handleLoginSubmit=e=>{
        loginUser(loginData.email, loginData.password ,location ,history)
        e.preventDefault();
    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <img sx={{width:"100%"}} src={loginbg} alt="" />  
  </Grid>
  <Grid sx={{mt:8}} item xs={12} md={6}>
  <Typography variant="h4" gutterBottom color="info.main">
        Please Login
    </Typography>
    <form onSubmit={handleLoginSubmit}>
     <TextField
          label="Email"
          name="email"
          onBlur={handleOnBlur}
          sx={{width:'90%' ,m:1}}
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />
         <TextField
          label="Password"
          name="password"
          type="password"
          onBlur={handleOnBlur}
          sx={{width:'90%' ,m:1}}
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />
        <Button type="submit" sx={{ bgcolor: 'info.main' ,color:"white",m:1 ,":hover":{bgcolor:"info.main"}}}>Login</Button>
        <NavLink style={{textDecoration:"none",display:'block'}} to="/register"><Button>New User?Please Register</Button></NavLink>

    </form>
    {isLoading && <CircularProgress />}
    {user?.email && <Alert severity="success">Login Successfull!</Alert>}
    {authError && <Alert severity="error">{authError}</Alert>}
  </Grid>
     
  </Grid>
    );
};

export default Login;



