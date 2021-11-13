import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Checkbox, Select, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BuyModal = ({open,handleClose,explor}) => {
     const {title,price}= explor;
     const handleBuyingConfirm=e=>{
         alert("Successfull");
         handleClose();
         e.preventDefault();
     }
    return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Model : {title}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h5">
            Price : {price}
          </Typography>
          <form>
          <TextField
          label="Email"
          sx={{width:'90%' ,m:1}}
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />
        <TextField
          label="Address"
          sx={{width:'90%' ,m:1}}
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />
        <TextField
          label="Phone No"
          sx={{width:'90%' ,m:1}}
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />
        <Checkbox defaultChecked bgcolor="primary" /><span>Agree with terms & conditions</span>
        <Button onClick={handleBuyingConfirm} sx={{display:"block",bgcolor: 'info.main',color:"white" ,":hover":{bgcolor:'info.main'}}} type="submit">Confirm</Button>

          </form>
        </Box>
      </Modal>
    );
};

export default BuyModal;