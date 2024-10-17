import axiosInstance from "@/app/axios/axiosinstance";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";



interface SignData {
    name: string;
    username: string;
    email: string;
    phone: string;
    password: string;
    conformpassword: string;
    status: 'initial' | 'loading' | 'success' | 'failed';
    error: string | null;
}

const initialState: SignData = {
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    conformpassword: "",
    status: 'initial',
    error: null 
};

export const signUser = createAsyncThunk(
    'sign/signUser',
    async (userdata: { name: string; username: string; email: string; password: string; phone: string }, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post("users/signup", userdata);
            return response.data;
        } catch (error: any) {
            console.log("Signup error", error);
            return rejectWithValue(error.response?.data?.message || 'An error occurred');
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
            state.email = action.payload;
        },
        setphone: (state, action) => {
            state.phone = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
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
            .addCase(signUser.fulfilled, (state ) => {
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





