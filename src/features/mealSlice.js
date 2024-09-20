import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


const mealSlice=createSlice({

    name:'chicken',
    initialState:{items:[]},
    extraReducers:(builder)=>{
        builder.addCase(fetchdata.fulfilled,(state,action)=>{
            state.items=action.payload
        })
    }
})
 
export const fetchdata=createAsyncThunk('chicken/fetchdata',async()=>{
    const response=await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
    const result=await response.data
    
    return result.meals
 })

 export default mealSlice.reducer