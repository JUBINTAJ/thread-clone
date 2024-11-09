// import axiosInstance from "@/app/axios/axiosinstance";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// interface Follow {
//     userId: string;
//     followers: string[]; // Changed to an array for easier management
//     status: 'initial' | 'loading' | 'success' | 'failed';
//     error: string | null;
// }

// const initialState: Follow = {
//     userId: "",
//     followers: [],
//     status: 'initial',
//     error: null,
// };

// export const following = createAsyncThunk(
//     'follow/following',
//     async ({ userId }: { userId: string }, { rejectWithValue }) => {
//         try {
//             const response = await axiosInstance.post(`users/follow/${userId}`);
//             return response.data; // Expecting the new followers list or count
//         } catch (error: any) {
//             return rejectWithValue(error.response?.data.message || 'An error occurred');
//         }
//     }
// );

// export const unfollow = createAsyncThunk(
//     'follow/unfollow',
//     async ({ userId }: { userId: string }, { rejectWithValue }) => {
//         try {
//             const response = await axiosInstance.post(`users/unfollow/${userId}`);
//             return response.data; // Expecting the new followers list or count
//         } catch (error: any) {
//             return rejectWithValue(error.response?.data.message || 'An error occurred');
//         }
//     }
// );

// const followSlice = createSlice({
//     name: 'follow',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(following.pending, (state) => {
//                 state.status = 'loading';
//                 state.error = null;
//             })
//             .addCase(following.fulfilled, (state, action) => {
//                 state.status = 'success';
//                 // Assuming action.payload is the updated followers list
//                 state.followers = [...state.followers, action.payload.userId]; // Add userId to followers
//             })
//             .addCase(following.rejected, (state, action) => {
//                 state.status = 'failed';
//                 state.error = action.payload as string;
//             })
//             .addCase(unfollow.pending, (state) => {
//                 state.status = 'loading';
//                 state.error = null;
//             })
//             .addCase(unfollow.fulfilled, (state, action) => {
//                 state.status = 'success';
//                 // Assuming action.payload is the updated followers list
//                 state.followers = state.followers.filter(id => id !== action.payload.userId); // Remove userId from followers
//             })
//             .addCase(unfollow.rejected, (state, action) => {
//                 state.status = 'failed';
//                 state.error = action.payload as string;
//             });
//     }
// });

// export default followSlice.reducer;
