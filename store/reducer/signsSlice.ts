// import axiosInstance from "@/app/axios/axiosinstance";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// interface signdata {
//     user : string;
//     name:string;
//     username:string;
//     email:string;
//     phone:string;
//     password:string;
//     conformpassword:string;
//     stutas:'initail'|'loading'|'success'|'failed';
//     error:any | null;
// }

// const initialState : signdata ={
//     user:"",
//     name:"",
//     username:"",
//     email:"",
//     phone:"",
//     password:"",
//     conformpassword:"",
//     stutas:'initail',
//     error: null
// }


// export const  signUser = createAsyncThunk(
//     'sign/signdatas',
//       async  (userdata :{name:string, username:string, email:string, phone:string, password:string, conformpassword:string} ,{rejectWithValue})=>{

//         try{
//             const response=await axiosInstance.post('users/signup',userdata)
//             return response.data
//         }catch (error : any){
//             return rejectWithValue=(error.response.data.message || 'all error are occared')
//         }


//       }
      

// )




// const signSlice=createSlice({

//     name:'sign',
//     initialState,
//     reducers:{
//         setname :((state ,action)=>{
//             state.name=action.payload

//         }),
//         setusername: ((state ,action)=>{
//             state.username=action.payload
//         }),
//         setemail :((state ,action)=>{
//             state.email=action.payload

//         }),
//         setphone:((state ,action)=>{
//             state.phone=action.payload

//         }),    setPassword :((state ,action)=>{
//             state.password=action.payload

//         }),    setconformpassword:((state ,action)=>{
//             state.conformpassword=action.payload

//         }),

//     },extraReducers:(builder)=>{
//         builder
//                 .addCase(signUser.pending ,(state)=>{
//                     state.stutas='loading'

//                 })
//                 .addCase(signUser.fulfilled ,(state, action )=>{

//                     state.stutas='success'
//                     state.user=action.payload
//                 })
//                 .addCase(signUser.rejected ,(state ,action)=>{
//                     state.stutas='failed'
//                     state.error=action.payload

//                 })
//     }

// })


// export const {setname , setusername ,setphone ,setemail,setPassword,setconformpassword}=signSlice.actions

// export default signSlice.reducer