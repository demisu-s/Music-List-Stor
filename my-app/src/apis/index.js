import axios from 'axios'

axios.defaults.baseURL=' http://localhost:8000'



export const getMusicsAPI=async () =>axios.get(`/musics`)

//for get api
export const getMusicByIdAPI=async (id) =>axios.get(`/musics/${id}`)

//for create Api
export const createMusicAPI=async (music) =>axios.post(`/musics`,music)

//for update api
export const updateMusicAPI=async (music) =>axios.put(`/musics/${music.id}`,music)

//for delete api
export const deleteMusicByIdAPI=async (id) =>axios.delete(`/musics/${id}`)