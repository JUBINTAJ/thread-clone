import axiosInstance from "@/app/axios/axiosinstance";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";


interface User {
    id: string;
    name: string;
    followers: string[];
    following: string[];
    email: string;
    username: string;
    profilePic: string;
    bio: string;
}
 

interface inti{
  user:User | null
  users:User[] | null,
  stutas:'initail'|'loading'|'success'|'failed'
  error:string | null

}
 const initialState : inti = { 
    user:null,
    users:[],
    stutas:'initail',
    error:null
     

}

export  const fetchUser = createAsyncThunk ( 
    'usersid/fetchUserData',
    
    async (userId:string | null) => {
    try {
      const response = await axiosInstance.get(`users/${userId}`);
       console.log(response.data.user) 
       return response.data.user


    }catch(error){
        console.log("error")
    }
});


export const fetchsearch = createAsyncThunk(
    'user/fetchsearch',
      async ()=>{
        try{
            const response = await axiosInstance.get('users')
            return response.data.users
        }catch(error: any){
            console.log('error',error)
        }
      }
)




const usergetSlice=createSlice({
    name:'userget',
    initialState,
    reducers:{},
    extraReducers:(builder)=>(
        builder
           .addCase(fetchUser.pending ,(state)=>{
            state.stutas='loading'
           })
           .addCase(fetchUser.fulfilled ,(state ,action)=>{
            state.stutas="success"
            state.user=action.payload
           })
           .addCase(fetchUser.rejected ,(state ,action : PayloadAction<any> )=>{
            state.stutas="failed"
            state.error=action.payload
           })

           .addCase(fetchsearch.pending,(state)=>{
            state.stutas='loading'
           })
           .addCase(fetchsearch.fulfilled ,(state ,action :PayloadAction<any>)=>{
            state.stutas="success"
            state.users=action.payload
           })
           .addCase(fetchsearch.rejected ,(state ,action : PayloadAction<any> )=>{
            state.stutas="failed"
            state.error=action.payload
           })
    )

})

export default usergetSlice.reducer