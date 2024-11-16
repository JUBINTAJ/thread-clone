import axiosInstance from "@/app/axios/axiosinstance";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Reply {
    _id: string;
    text: string;
    image?: string;
}

interface User {
    id: string;
    name : string;
    username:string;
    email:string;
    profilePic:string;
}

interface Post {
    id: string;
    userId: string;
    username: string;
    postById: User[];
    profilePic: string;                                  
    text: string;
    image?: string; 
    likes: number;
    comments: number;
    createdAt: string;
    replies: Reply[];
    reposts: string[];
    updatedAt: string;
    __v: number;
}

interface PostsState {
    post: Post[] ;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}


const initialState: PostsState = {
    post: [],
    status: "idle",
    error: null,
};


export const fetchPostByUserId = createAsyncThunk(
    "posts/fetchPostByUserId",
    async (userId: string | any) => {
        const response = await axiosInstance.get(`posts/${userId}`);
        
        return response.data.post;
  
});




const postSlice=createSlice({
    name:'post',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPostByUserId.pending, (state) => {
            state.status = "loading";
            state.error = null;
        })
         
        .addCase(fetchPostByUserId.fulfilled, (state, action: PayloadAction<Post[]>) => {
            state.status = "succeeded";
            state.post = action.payload; 
            console.log(action.payload)
        })
        
        .addCase(fetchPostByUserId.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message || "Failed to fetch posts.";
        });
        
    }
})

export default postSlice.reducer