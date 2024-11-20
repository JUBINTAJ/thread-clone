import axiosInstance from "@/app/axios/axiosinstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Follower {
  userId: string;
  username: string;
  profilpic: string;
  followers: string;
  name: string;
}

interface FollowState {
  
  followers: Follower[]; 
  status: "initial" | "loading" | "success" | "failed";
  error: string | null;
}

const initialState: FollowState = {
 
  followers: [],
  status: "initial",
  error: null,
};

export const fetchFollowers = createAsyncThunk(
  "follow/fetchFollowers",
  async ({ userId }: { userId: string }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`users/followers/${userId}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data.message || "An error occurred");
    }
  }
);

const followSlice = createSlice({
  name: "follow",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFollowers.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchFollowers.fulfilled, (state, action) => {
        state.status = "success";
        state.followers = action.payload; 
      })
      .addCase(fetchFollowers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default followSlice.reducer;
