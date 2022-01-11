import { Typography } from '@mui/material';
import React from 'react';
import pay from '../../../../flaticons/pay1.jfif';

const Pay = () => {
    const payBg = {
        backgroundImage: `url(${pay})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        height:"100vh",
        marginTop: '15px',
        marginBottom: '35px'
    }
    return (
        <div style={payBg}>
            <Typography variant='h4' textAlign='center' color='info.main' paddingY='120px'>Payment Method Coming Soon...</Typography>
        </div>
    );
};

export default Pay;