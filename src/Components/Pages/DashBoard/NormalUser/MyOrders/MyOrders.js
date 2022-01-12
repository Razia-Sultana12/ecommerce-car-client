import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography,Container,Button } from '@mui/material';
const MyOrders = () => {
    const[orders,setOrders] = useState([]);
    const[_id,email,date,name] = orders;
    useEffect(()=>{
        fetch("https://fierce-peak-59128.herokuapp.com/orders")
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[]);
    const handleDelete = id => {
        const url = `https://fierce-peak-59128.herokuapp.com/cars/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data); 
           if(data.deletedCount){
               alert('Deleted Successfully');
            const remaining = orders.filter(order => order._id !== id);
            setOrders(remaining);
           } 
        })
    }
    return (
        <div>
            <Container>
        <Typography variant='h4' color='info.main' textAlign='center' my='15px'>My Orders</Typography>
        <Typography variant='h6' textAlign='center'>You have placed {orders.length} orders.</Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product ID</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Delete</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {order._id}
              </TableCell>
              <TableCell align="right">{order.email}</TableCell>
              <TableCell align="right">{order.name}</TableCell>
              <TableCell align="right">{order.date}</TableCell>
              <TableCell align="right"><Button onClick={()=>handleDelete(order._id)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
        </div>
    );
};

export default MyOrders;
