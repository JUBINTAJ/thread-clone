import axiosInstance from "@/app/axios/axiosinstance";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";


interface logindata {
    user : string | null;
    password:string;
    stutas:'initail'|'loading'|'success'|'failed';
    error:any | null;
}

const initialState : logindata ={
    user:null,
    password: "",
    stutas:'initail',
    error: null
}



export const  loginUser = createAsyncThunk(
    'login/loginUser',
      async  (userdata :{user:string, password:string } ,{rejectWithValue})=>{

        try{
            const response=await axiosInstance.post('users/login',userdata)
            return response.data



        }catch (error : any){
            return rejectWithValue=(error.response.data.message || 'all error are occared')
        }


      }
      

)

export  const fetchUserData = createAsyncThunk ( 
    'user/fetchUserData',
    
    async (userd,) => {
    try {
      const response = await axiosInstance.get('users/',userd);
      return response.data


    }
  };

)




const userSlice=createSlice({

    name:'user',
    initialState,
    reducers: {},
    
            extraReducers:(builder)=>{
              builder
                .addCase(loginUser.pending ,(state)=>{
                    state.stutas='loading'

                })
                .addCase(loginUser.fulfilled ,(state, action : PayloadAction<any> )=>{

                    state.stutas='success'
                    state.user=action.payload
                })
                .addCase(loginUser.rejected ,(state ,action  : PayloadAction<any>)=>{
                    state.stutas='failed'
                    state.error=action.payload

                })

                .addCase(fetchUserData.pending ,(state)=>{
                    state.stutas='loading'

                })
                .addCase(fetchUserData.fulfilled ,(state, action : PayloadAction<any> )=>{

                    state.stutas='success'
                    state.user=action.payload
                })
                .addCase(fetchUserData.rejected ,(state ,action  : PayloadAction<any>)=>{
                    state.stutas='failed'
                    state.error=action.payload

                })
    }

})

export default userSlice.reducer