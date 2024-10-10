import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "@/store/reducer/loginSlice"
import signSlice  from "@/store/reducer/signsSice"


export const store= configureStore({

    reducer:{
       login :loginSlice,
       sign : signSlice
    }

})