import { configureStore } from "@reduxjs/toolkit";
// import loginSlice from "@/store/reducer/loginSlice"
// import signSlice  from "@/store/reducer/signsSlice"
import userSlice from  "@/store/reducer/userSlice"
import postsSlice from '@/store/reducer/postssSlice'
import postSlice from '@/store/reducer/postSlice'
import usergetSlice from "@/store/reducer/usergetSlice"
import followsSlice from '@/store/reducer/follow'
import activityslice from '@/store/reducer/activity'


export const store= configureStore({

    reducer:{
      //  login :loginSlice,
      //  sign : signSlice,
       user : userSlice,
      posts: postsSlice,
      post:postSlice,
      userget :usergetSlice,
      follow : followsSlice,
      activity:activityslice
    }

})

export type RootState=ReturnType<typeof  store.getState>;
export type AppDispatch=typeof store.dispatch;