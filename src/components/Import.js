import React from 'react';
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container, TableContainer, Paper } from '@mui/material';

import BasicMenu from "./BasicMenu"


const Import = (props) => {
    // fill out this component
    
    return (
        <Container>
          <br></br>
          <br></br>
        <Button onClick={props.fetchMakes} variant="contained">Import </Button >
        <br></br>
        <h2>COUNT: {props.makes.length}</h2>
        <br></br>
        <TableContainer component={Paper}>
            
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Make</TableCell>
            <TableCell align="right">Actions</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
            
          {props.makes.map((make, index) => (
            
            <TableRow
              key={make.MakeId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               
              <TableCell component="th" scope="row">
                {make.MakeId}
              </TableCell>

              <TableCell align="left">{make.MakeName}</TableCell>
              <TableCell align="right">{<BasicMenu 
                                        deleteMake={()=> props.deleteMake(index)}
                                        />}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
        </Container>
    )
}

export default Import