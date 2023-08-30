import {createSlice} from '@reduxjs/toolkit'


const music = createSlice({
    name:'music',
    initialState:{
        id: 0,
        title: '',
        name: '',
        musicFile: ''
    },
    reducers:{
        setMusicSlice:(state,action)=>{
            
           state=action.payload 
           return state
        }
    }
})
export const {setMusicSlice} = music.actions
export default music.reducer