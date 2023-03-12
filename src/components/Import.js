import React from 'react';
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container, TableContainer, Paper } from '@mui/material';
// import Button from '@mui/material/Button'
// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }

const Import = (props) => {
    // fill out this component
    
   
      
    return (
        <div>
        <Button onClick={props.fetchMakes} variant="contained">Import </Button >
        <TableContainer component={Paper}>
            
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Make</TableCell>
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

              <TableCell align="right">{make.MakeName}</TableCell>
              {/* <TableCell align="right">{make.name}</TableCell>
              <TableCell align="right">{props.make.actions}</TableCell>  */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
        </div>
    )
}

export default Import