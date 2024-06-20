import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    filterArticles:null
}
const filterArticles = createSlice({

    name:"filterArticle",
    initialState,
    reducers:{
        setFilteredArticles:(state,action)=>{
                state.filterArticles = action.payload
        }
    }
})

export const  {setFilteredArticles} = filterArticles.actions;

export default filterArticles.reducer;