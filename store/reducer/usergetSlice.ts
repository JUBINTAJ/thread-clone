        import axiosInstance from "@/app/axios/axiosinstance";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

interface User {
    id: string;
    username: string ;
    email: string;
    profilePic: string;
}
interface User {
    id: string;
    name: string;
    postById:User;
    followers: string[];
    following: string[];
    email: string;
    username: string;
    profilePic: string;
    bio: string;
}
 

interface inti{
  user:User | null
  users:User[] 
  status:'initail'|'loading'|'success'|'failed'
  error:string | null

}
 const initialState : inti = { 
    user:null,
    users:[],
    status:'initail',
    error:null
     

}

export  const fetchUser = createAsyncThunk ( 
    'usersid/fetchUserData',
    
    async () => {
    try {
        const userId = localStorage.getItem("userid")
      const response = await axiosInstance.get(`users/${userId}`);
    //    console.log(response.data.user) 
       return response.data.user


    }catch(error){
        console.log("error",error)
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
            state.status='loading'
           })
           .addCase(fetchUser.fulfilled ,(state ,action)=>{
            state.status="success"
            state.user=action.payload
           })
           .addCase(fetchUser.rejected ,(state ,action : PayloadAction<any> )=>{
            state.status="failed"
            state.error=action.payload
           })

           .addCase(fetchsearch.pending,(state)=>{
            state.status='loading'
           })
           .addCase(fetchsearch.fulfilled ,(state ,action :PayloadAction<any>)=>{
            state.status="success"
            state.users=action.payload
           })
           .addCase(fetchsearch.rejected ,(state ,action : PayloadAction<any> )=>{
            state.status="failed"
            state.error=action.payload
           })
    )

})

export default usergetSlice.reducer