import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "@/store/reducer/loginSlice"
import signSlice  from "@/store/reducer/signsSlice"


export const store= configureStore({

    reducer:{
       login :loginSlice,
       sign : signSlice
    }

})

export type RootState=ReturnType<typeof  store.getState>;
export type AppDispatch=typeof store.dispatch;