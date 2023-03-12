import React, {useState} from 'react';
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container, TableContainer, Paper } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import BasicMenu from "./BasicMenu";


const Import = (props) => {
    // set state of page to keep track of current page number
    const [page, setPage] = useState(1);
    const rowsPerPage =20; //number of rows to display per page

      // get the current page of data based on the current page number and rows per page
    const currentData = props.makes.slice((page -1) *rowsPerPage, page * rowsPerPage)
    
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
            
          {currentData.map((make, index) => (
            
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
    <Stack spacing={2}>
      <Pagination
      count={Math.ceil(props.makes.length / rowsPerPage)}
      page= {page}
      onChange={(event, value)=> setPage(value)}
      />
    </Stack>
        
        </Container>
    )
}

export default Import