import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './mytable.css';
import { deleteMusicsSlice } from '../redux/slice/musics';
import { setMusicSlice } from '../redux/slice/music';
import { DELETE_MUSIC_BY_ID, GET_MUSICS } from '../redux/types';

export default function MyTable() {
  const rows = useSelector((state) => state.musics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_MUSICS });
  }, [dispatch]);

  return (
    <TableContainer component={Paper} className='tcontainer'>
      <div className='toadd'>
        <Link to='/add'>
          <Button variant="contained">Add Music</Button>
        </Link>
      </div>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead className='tableHead'>
          <TableRow>
            <TableCell className='rowt'>Music Title</TableCell>
            <TableCell align="right">Artist Name</TableCell>
            <TableCell align="right">Music</TableCell>
            <TableCell className='smat' align="right">Edit</TableCell>
            <TableCell className='smad' align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">
  {row.musicFile ? row.musicFile.name : 'No File'}
</TableCell>

              <TableCell align="right">
                <Link to='/add'>
                  <Button
                    onClick={() => dispatch(setMusicSlice(row))}
                    fullWidth
                    variant="contained"
                  >
                    Edit
                  </Button>
                </Link>
              </TableCell>
              <TableCell align="right">
                <Button
                  onClick={() => dispatch({ type: DELETE_MUSIC_BY_ID, id: row.id })}
                  fullWidth
                  variant="contained"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
