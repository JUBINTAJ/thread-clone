import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { axiosintercept } from "@/app/axios/axios";



interface userdetails {
    user : any | null;
    status : 'intial' | 'loading' | 'succees' | 'failed' ;
    error : string | null

}

const  initialState : userdetails ={
    user : null ,
    status:'intial',
    error:null
}

export const loginUser = createAsyncThunk(
    'login/loginUser',
    async (userdata: { user: string; password: string }, { rejectWithValue }) => {


      try {
        const response = await axiosintercept.post('/users/login', userdata)
        return response.data
      }
      
      catch (error: any) {
        return rejectWithValue(error.response?.data?.message || 'An error occurred');
      }
    }
  );




//  slice

const loginSlice=createSlice({
    name:'login',
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder 
           .addCase(loginUser.pending ,(state)=>{
            state.status='loading'
           })
      .addCase(loginUser.fulfilled ,(state , action : PayloadAction<any>)=>{
          state.status="succees";
          state.user=action.payload;
      })
      .addCase(loginUser.rejected ,(state ,action : PayloadAction<any>)=>{
        state.status="failed";
        state.error=action.payload;
      })

    }


})


export default loginSlice.reducer