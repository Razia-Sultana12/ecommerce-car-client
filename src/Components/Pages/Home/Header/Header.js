import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import car from '../../../flaticons/car-service.png';
import useAuth from '../../../../hooks/useAuth';
import { Logout } from '@mui/icons-material';
import { Avatar } from '@mui/material';



const Header = () => {
  const {user,logout} = useAuth();
    return (
        <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ bgcolor: 'text.primary'  }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <img width="42" height="42" src={car}/><span className="color">CarPlanet</span>
          </Typography>
          <Link to="/home"><Button color="inherit" sx={{textDecoration:'none',color:'white'}}>Home</Button></Link>
          <Link to="/dashboard"><Button color="inherit" sx={{textDecoration:'none',color:'white'}}>DashBoard</Button></Link>
          <Link to="/explore"><Button color="inherit" sx={{textDecoration:'none',color:'white'}}>Explore</Button></Link>
          {
            user?.email?
            <Button onClick={logout} color="inherit">LogOut <Logout /></Button>:
            <Link to="/login"><Button color="inherit" sx={{textDecoration:'none',color:'white'}}>Login</Button></Link>
          } 
          {user.email &&
           <Avatar alt="Remy Sharp" src={user.photoURL} />   }
        </Toolbar>
       
      </AppBar>
    </Box>
    );
};

export default Header;