import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState,useEffect } from 'react';
import { Button, Container, Typography } from '@mui/material';

const ManageProducts = () => {
    const [products,setProducts]=useState([]);
    const {_id,title,description,image,price} = products;
    useEffect(() => {
        fetch('https://fierce-peak-59128.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setProducts(data));
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
            const remaining = products.filter(product => product._id !== id);
            setProducts(remaining);
           } 
        })
    }

return (
    <Container>
        <Typography variant='h4' color='info.main' textAlign='center' my='15px'>Manage Products</Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product ID</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Price($)</TableCell>
            <TableCell align="right">Delete</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product._id}
              </TableCell>
              <TableCell align="right">{product.title}</TableCell>
              <TableCell align="right">{product.price}</TableCell>
              {/* <TableCell align="right">{product.image}</TableCell> */}
              <TableCell align="right"><Button onClick={()=>handleDelete(product._id)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}

export default ManageProducts;