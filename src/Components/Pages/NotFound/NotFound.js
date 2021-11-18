import React from 'react';
import notfound from '../../flaticons/404.jpg';
import { Link } from 'react-router-dom';
import { Button,Box } from '@mui/material';

const NotFound = () => {
    const notfoundBg = {
        backgroundImage: `url(${notfound})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        height:"100vh",
        marginTop: '15px',
        marginBottom: '35px'
    }
    return (
        <div style={notfoundBg}>
            <Box textAlign='center' alignContent='verticalCenter'><Link to='/'><Button sx={{bgcolor:"blueviolet",color:"white",":hover":{
       backgroundColor: "rebeccapurple",
    }}}>Go Back</Button></Link></Box></div>
        
    );
};

export default NotFound;