import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_MUSIC, UPDATE_MUSIC_BY_ID } from '../redux/types';
import { setMusicSlice } from '../redux/slice/music';
import Input from '@mui/material/Input';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { nanoid } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

import './myform.css';

const MyForm = () => {
  const music = useSelector((state) => state.music);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (prop) => (event) => {
    dispatch(setMusicSlice({ ...music, [prop]: event.target.value }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Store additional information about the file if needed
    dispatch(setMusicSlice({ ...music, musicFile: file }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (music.id === 0) {
      dispatch({ type: CREATE_MUSIC, music: { ...music, id: nanoid(8) } });
    } else {
      dispatch({ type: UPDATE_MUSIC_BY_ID, music });
    }

    dispatch(
      setMusicSlice({
        id: 0,
        title: '',
        name: '',
        musicFile: null,
      })
    );

    navigate('/');
  };

  return (
    <Container className='fcontainer'>
      <div className='add'>Add Music</div>
      <form onSubmit={handleSubmit}>
        <div className='idf'>
          <Input value={music.id} disabled />
        </div>
        <div>
          <Input className='titlee' onChange={handleChange('title')} placeholder="music title" value={music.title} required />
        </div>
        <div>
          <Input className='namee' onChange={handleChange('name')} placeholder="artist name" value={music.name} required />
        </div>
        <div>
          <Input className='musicFilee' type="file" onChange={handleFileChange} />
        </div>
        <div>
          <Button className='btnn' type="submit" variant="contained">
            Create
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default MyForm;
