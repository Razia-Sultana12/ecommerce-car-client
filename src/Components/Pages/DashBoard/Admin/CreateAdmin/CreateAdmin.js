import { Button, TextField, Alert, Typography ,Box} from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../../../hooks/useAuth';
import PersonPinIcon from '@mui/icons-material/PersonPin';

const CreateAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    //const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://fierce-peak-59128.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <Box sx={{textAlign:'center'}} xs={12}>
            <Typography sx={{textAlign:'center',m:3,color:'info.main'}} variant='h4'><PersonPinIcon sx={{fontSize:'40px'}}></PersonPinIcon>Make Admin</Typography>
            <form sx={{textAlign:'center'}} onSubmit={handleAdminSubmit}>
            <TextField
          label="Email"
          name="email"
          type="email"
          onBlur={handleOnBlur}
          sx={{width:'75%' ,m:1}}
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />
                {/* <TextField
                    sx={{ width: '50%',color:'InfoBackground.main' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" /> */}
                <Button sx={{display:'block',mx:'auto'}} type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </Box>
        
    );
};

export default CreateAdmin;