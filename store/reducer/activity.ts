import axiosInstance from "@/app/axios/axiosinstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  profilpic: string;
}

interface Notification {
  id: string;
  description: string;
  senderuserId: User[];
}

interface NotificationsState {
  notification: Notification[]; 
  status: "initial" | "loading" | "success" | "failed"; 
  error: string | null;
}

const initialState: NotificationsState = {
  notification: [], 
  status: "initial",
  error: null,
};

export const fetchnoti = createAsyncThunk(

  "noti/fetchnoti",
  async ({},{ rejectWithValue }) => {
    try {
        const userId = localStorage.getItem('userid') 
      const response = await axiosInstance.get(`users/notification/${userId}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data.message || "An error occurred");
    }
  }
);

const activity = createSlice({
  name: "activity",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchnoti.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchnoti.fulfilled, (state, action) => {
        state.status = "success";
        state.notification = action.payload; 
      })
      .addCase(fetchnoti.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string; 
      });
  },
});

export default activity.reducer;
