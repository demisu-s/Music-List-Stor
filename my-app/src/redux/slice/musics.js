// musics.js
import { createSlice } from '@reduxjs/toolkit';

const musics = createSlice({
  name: 'musics',
  initialState: [],

  reducers: {
    getMusicsSlice: (state, action) => {
      return action.payload;
    },
    addMusicsSlice: (state, action) => {
      state.push(action.payload);
    },
    editMusicsSlice: (state, action) => {
      return state.map((music) =>
        music.id === action.payload.id ? action.payload : music
      );
    },
    deleteMusicsSlice: (state, action) => {
      return state.filter((music) => music.id !== action.payload);
    },
  },
});

export const {
  getMusicsSlice,
  addMusicsSlice,
  editMusicsSlice,
  deleteMusicsSlice,
} = musics.actions;
export default musics.reducer;
