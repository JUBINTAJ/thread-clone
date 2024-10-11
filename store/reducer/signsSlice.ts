
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { axiosintercept } from "@/app/axios/axios";
// import axios from "axios";

// interface signdata {
//     name:string;
//     username:string;
//     Email:string;
//     phone: string;
//     Password: string;
//     conformpassword: string;
//     status:'intial'|'loading'|'succes'|'failed';
//     error:string| null
// }

// const initialState : signdata ={
//     name:"",
//     username:"",
//     Email:"",
//     phone:"",
//     Password:"",
//     conformpassword:"",
//     status:'intial',
//     error:'null'

// }

// export const signUser=createAsyncThunk(
//     'sign/signUser',
//     async(userdata:{name: string ;username:string;Email:string;phone:string;Password:string;conformpassword:string },{rejectWithValue}) =>{
 
//         try{
            
//             const response=await axiosintercept.post("users/signup", userdata)
//             return response.data
           
            
//         }
//         catch(error:any){
//             return  rejectWithValue(error.response.data.message  ) 

//         }

//     }
  
// )





// const signSlice=createSlice({
//     name:'sign',
//     initialState,
//     reducers:{
//         setname :(state ,action)=>{
//             state.name=action.payload
//         },
//         setusername:(state,action)=>{
//       state.username=action.payload
//         },
//         setemail:(state,action)=>{
//             state.Email=action.payload
//         },
//         setphone:(state,action)=>{
//             state.phone=action.payload
//         },
//         setPassword:(state,action)=>{
//             state.Password=action.payload
//         },setconformpassword:(state ,action)=>{
//             state.conformpassword=action.payload
//         }
//     },extraReducers:(builder)=>{
//         builder
//             .addCase(signUser.pending ,(state)=>{
//                 state.status='loading'

//             })
//             .addCase(signUser.fulfilled ,(state)=>{
//                 state.status='succes'
//             })
//             .addCase(signUser.rejected,(state ,action)=>{
//                 state.status='failed',
//                 state.error=action.payload as string
//             })
//     }
// })

// export const {setname ,setusername ,setemail ,setphone ,setPassword,setconformpassword}=signSlice.actions

// export default signSlice.reducer


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface signdata {
    name: string;
    username: string;
    Email: string;
    phone: string;
    Password: string;
    conformpassword: string;
    status: 'initial' | 'loading' | 'success' | 'failed';
    error: string | null;
}

const initialState: signdata = {
    name: "",
    username: "",
    Email: "",
    phone: "",
    Password: "",
    conformpassword: "",
    status: 'initial',
    error: null // Changed from 'null' string to null
};

export const signUser = createAsyncThunk(
    'sign/signUser',
    async (userdata: { name: string; username: string; Email: string; phone: string; Password: string; conformpassword: string }, { rejectWithValue }) => {
        try {
            const response = await axios.post("http://social-media-rest-apis.onrender.com/api/users/signup", userdata);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data.message || "Something went wrong");
        }
    }
);

const signSlice = createSlice({
    name: 'sign',
    initialState,
    reducers: {
        setname: (state, action) => {
            state.name = action.payload;
        },
        setusername: (state, action) => {
            state.username = action.payload;
        },
        setemail: (state, action) => {
            state.Email = action.payload;
        },
        setphone: (state, action) => {
            state.phone = action.payload;
        },
        setPassword: (state, action) => {
            state.Password = action.payload;
        },
        setconformpassword: (state, action) => {
            state.conformpassword = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signUser.fulfilled, (state) => {
                state.status = 'success';
            })
            .addCase(signUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            });
    }
});

export const { setname, setusername, setemail, setphone, setPassword, setconformpassword } = signSlice.actions;

export default signSlice.reducer;
