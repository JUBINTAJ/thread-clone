// import axiosInstance from "@/app/axios/axiosinstance";
// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { error } from "console";


// interface userdata{
//    user:null|any;
//    name:string;
//    username:string;
//    email:string;
//    phone:string;
//    password:string;
//    conformpasssword:string;
//    stutas:'intail'|'loading'|'success'|'failed';
//    error:string|null
// }

// const initialState : userdata ={
//     user:null,
//     name:"",
//     username:"",
//     email:"",
//     phone:"",
//     password:"",
//     conformpasssword:"",
//     stutas:'intail',
//     error:null

// }


// export const signUser=createAsyncThunk(
//     'login/signUser ',
//       async(user:{ user:null|any; name:string; username:string; email:string;  phone:string; password:string;},{rejectWithValue})=>{
//         try{
//             const response=await axiosInstance.post('users/sign',user)
//             return response.data
//         }catch(error:any){
//             return rejectWithValue=(error.response.message.data || "all error occured")


//         }
//       }
// )
// export const loginUser = createAsyncThunk(
//     'user/loginUser',
//     async (userdata: { username: string; password: string }, { rejectWithValue }) => {
//         try {
//             const response = await axiosInstance.post('users/login', userdata);
//             return response.data;
//         } catch (error: any) {
//             return rejectWithValue(error.response?.data?.message || 'An error occurred');
//         }
//     }
// );


// const userSlice=createSlice({
//     name :'user',
//     initialState,
//     reducers:{
//         setname:((state,action )=>{
//             state.name=action.payload

//         }),     setusername:((state,action )=>{
//             state.username=action.payload

//         }),     setphone:((state,action )=>{
//             state.phone=action.payload

//         }),     setemail:((state,action )=>{
//             state.email=action.payload

//         }) ,    setpassword:((state,action )=>{
//             state.password=action.payload

//         }),     setconformpassword:((state,action )=>{
//             state.conformpasssword=action.payload

//         })

//     },extraReducers:(builder)=>{
//      builder  
//           .addCase(signUser.pending,(state)=>{
//             state.stutas="loading"
//           })
//           .addCase(signUser.fulfilled,(state)=>{
//             state.stutas="success"
//           })
//           .addCase(signUser.rejected,(state)=>{
//             state.stutas="failed"
//           })
//           .addCase(loginUser.pending,  (state)=>{
//                  state.stutas='loading'
//           })
//           .addCase(loginUser.fulfilled,  (state ,action : PayloadAction<any>)=>{
//             state.stutas='success'
//             state.user=action.payload
//      })
//      .addCase(loginUser.rejected,  (state   ,action : PayloadAction<any>)=>{
//         state.stutas='failed'
//         state.error=action.payload
//  })
            
//     }

// })

// export const {  setname ,setusername,setemail,setphone,setpassword  ,setconformpassword }= userSlice.actions;
// export default userSlice.reducer
