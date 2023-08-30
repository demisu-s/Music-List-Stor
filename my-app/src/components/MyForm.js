import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMusicsSlice, editMusicsSlice } from '../redux/slice/musics';
import Input from '@mui/material/Input'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';
import { setMusicSlice } from '../redux/slice/music';
import { nanoid } from '@reduxjs/toolkit';
import { CREATE_MUSIC, UPDATE_MUSIC_BY_ID } from '../redux/types';

const MyForm = () => {    
  const music = useSelector((state) => state.music);
  const dispatch = useDispatch();

  const handleChange = (prop) => (event) => {
    dispatch(setMusicSlice({ ...music, [prop]: event.target.value }));
  };

  const handleFileChange = (event) => {
    dispatch(setMusicSlice({ ...music, musicFile: event.target.files[0] }));
  };

  const handleSubmit = () => {
    if (music.id === 0) {
      // dispatch(addMusicsSlice({ ...music, id: nanoid(8) }));

      dispatch({type:CREATE_MUSIC,music:{ ...music, id: nanoid(8) } });
  
    } else {
      dispatch({type:UPDATE_MUSIC_BY_ID,music})
      // dispatch(editMusicsSlice(music));
    }
  
    dispatch(
      setMusicSlice({
        id: 0,
        title: '',
        name: '',
        musicFile: null,
      })
    );
  };
  
  return (
    <Container>
      <Input value={music.id} fullWidth disabled />
      <Input onChange={handleChange('title')} placeholder="music title" value={music.title} fullWidth />
      <Input onChange={handleChange('name')} placeholder="artist name" value={music.name} fullWidth />
      <Input type="file" onChange={handleFileChange} /> {/* File input for uploading */}
      <div>
      <Button onClick={handleSubmit} halfWidth variant="contained">
        
        Submit
      </Button>
      </div>
    </Container>
  );
};

export default MyForm;
