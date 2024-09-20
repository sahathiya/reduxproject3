import { configureStore } from "@reduxjs/toolkit";
import mealSlice from "../features/mealSlice";


const store=configureStore({
    reducer:{
        chickmeals:mealSlice
    }
})

export default store