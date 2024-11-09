import axiosInstance from "@/app/axios/axiosinstance";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";



interface update {
    name: string;
    username: string;
    email: string;
    bio: string;
    profilePic: string
}
interface logindata {
    user :   any| null;
    password:string;
    userupdate:update[];
    status:'initail'|'loading'|'success'|'failed';
    error:any | null;
}


const initialState : logindata ={
    user:null,
    userupdate:[],
    password: "",
    status:'initail',
    error: null
}


// export const  loginUser = createAsyncThunk(
//     'login/loginUser',
//       async  (userdata :{username:string, password:string } ,{rejectWithValue})=>{

//         try{
//             const response=await axiosInstance.post('users/login',userdata)
//             return response.data



//         }catch (error : any){
//             return rejectWithValue=(error.response.data.message || 'all error are occared')
//         }


//       }
      

// )



export const  userupdate=createAsyncThunk(
    'update/userupdate',
            async (userupdate :{name:string,  username: string;email:string ,bio:string,profilepic:string },{rejectWithValue})=>{
                try{
                    const response=await axiosInstance.patch(`users/${userupdate}`)
                }catch(error:any){
                    return rejectWithValue=(error.response.data.message || 'error')
                }
            } 
)














const userSlice=createSlice({

    name:'user',
    initialState,
    reducers: {},
    
            extraReducers:(builder)=>{
              builder
                // .addCase(loginUser.pending ,(state)=>{
                //     state.status='loading'

                // })
                // .addCase(loginUser.fulfilled ,(state, action : PayloadAction<any> )=>{

                //     state.status='success'
                //     state.user=action.payload
                // })
                // .addCase(loginUser.rejected ,(state ,action  : PayloadAction<any>)=>{
                //     state.status='failed'
                //     state.error=action.payload

                // })

                .addCase(userupdate.pending ,(state)=>{
                    state.status='loading'
                }).addCase(userupdate.fulfilled,(state , action :PayloadAction<any>)=>{
                    state.status='success'
                    state.userupdate=action.payload
                }).addCase(userupdate.rejected ,(state ,action :PayloadAction<any> )=>{
                    state.status='failed'
                    state.error=action.payload
                })



    }

})

export default userSlice.reducer