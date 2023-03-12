import React from 'react';
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container, TableContainer, Paper } from '@mui/material';
// import Button from '@mui/material/Button'
// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }

const Import = (props) => {
    // fill out this component
    
    // const rows = [
    //     createData('Frozen yoghurt', 159, 6.0),
    //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    //     createData('Eclair', 262, 16.0, 24, 6.0),
    //     createData('Cupcake', 305, 3.7, 67, 4.3),
    //     createData('Gingerbread', 356, 16.0, 49, 3.9),
    //   ];
      
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
              key={make.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               
              <TableCell component="th" scope="row">
                {make.id}
              </TableCell>

              <TableCell align="right">{make.name}</TableCell>
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