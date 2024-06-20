import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter:""
}
const filterSlice = createSlice({

    name:"articleFilter",
    initialState,
    reducers:{
        setFilter:(state,action)=>{
            state.filter = action.payload
        }
    }

})

export const {setFilter} = filterSlice.actions;

export default filterSlice.reducer