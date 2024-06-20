import { configureStore } from "@reduxjs/toolkit";
import fetchSlice from "./redux/fetchSlice";
import filterSlice from "./redux/filterSlice";
import filterArticles from "./redux/filterArticles";

export const store  =  configureStore({

    reducer:{

        article:fetchSlice,
        articleFilter:filterSlice,
        filteredArticles:filterArticles,
      
    }
})