import axiosInstance from "@/app/axios/axiosinstance";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";



interface userdetails {
    user : any | null;
    status : 'intial' | 'loading' | 'success' | 'failed' ;
    error : string | null

}

const  initialState : userdetails ={
    user : null ,
    status:'intial',
    error:null
}

export const loginUser = createAsyncThunk(
    'login/loginUser',
    async (userdata: { username: string; password: string  }, { rejectWithValue }) => {


      try {
        const response = await axiosInstance.post('users/login', userdata)
        return response.data
      }
      
      catch (error: any) {
        return rejectWithValue(error.response?.data?.message || 'An error occurred');
      }
    }
  );
  





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
          state.status="success";
          state.user=action.payload;
      })
      .addCase(loginUser.rejected ,(state ,action : PayloadAction<any>)=>{
        state.status="failed";
        state.error=action.payload;
      })

    }


})


export default loginSlice.reducer