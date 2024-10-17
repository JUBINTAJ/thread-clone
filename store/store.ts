import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "@/store/reducer/loginSlice"
import signSlice  from "@/store/reducer/signsSlice"
// import userSlice from  "@/store/reducer/userSlice"


export const store= configureStore({

    reducer:{
       login :loginSlice,
       sign : signSlice,
    //    user : userSlice
    }

})

export type RootState=ReturnType<typeof  store.getState>;
export type AppDispatch=typeof store.dispatch;