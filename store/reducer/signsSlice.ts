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


















































// 'use client';
// import axiosInstance from '@/app/axios/axiosinstance';
// import { useAppDispatch, useAppSelector } from '@/app/hookkkk/Appdispatch';
// import { fetchPosts } from '@/store/reducer/postssSlice';
// import React, { ReactNode, useEffect, useState } from 'react';
// import Loading from '@/app/componnts/loading/loading';
// import { fetchUser } from '@/store/reducer/usergetSlice';
// import comment from '@/Public/img/chat (1).png'
// import Image from 'next/image';


// interface Reply {
//     text:string;
//     username:string;
//     userId:string;
//     userprofilpic:string;

// }

// interface Post{
//     postId:string;
//     text : string;
//     postById:{
//         username : string}
//     image?:string;
//     replies:Reply[] 
// }


// interface PostProps {
//     isopen: boolean;
//     onclose: () => void;

//     postId:string;
//     userId:string;
//     userprofilpic:string;
//     username:string;
// }

// const Comment: React.FC<PostProps> = ({ isopen, onclose, userId, postId ,userprofilpic, username }) => {

//     const [post, setPost] = useState<Post | null >(null);
//     const [comment, setComment] = useState<string>('');
//     const [loading, setLoading] = useState<boolean>(false);
//     const [error, setError] = useState<string | null>(null);
//     const dispatch =useAppDispatch();


//     useEffect(()=>{
//         if(isopen){
//         const fetchpost = async ()=>{
//             try {
//                 const res =await axiosInstance.get(`posts/post/${postId}`)
//                 console.log('post data',res.data)
//                 setPost (res.data.post)
//             }catch(error){
//                 console.log('error',error)
//             }

//             fetchpost()
//         }
//         }
//     },[isopen,postId])


//     const handling = async()=>{
//         if(!comment.trim()) return;
            

//         const reply={
//             text:comment,
//             userId,
//             postId,
//             userprofilpic
//         } 
//         try{
//             setLoading(true)
//             await axiosInstance.post(`posts/${postId}/reply`,reply)
//             setComment('')
//             onclose()
//             dispatch(fetchPosts())
//             setError(null)
//         }catch(error){
//             console.log('error',error)
//             setError("erorrrr")
//         }finally{
//             setLoading(false)
//         }


//     }
// if(!isopen) return null

//    const replies = post?.replies ?? [];

// return (
//     <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50  ">
//         <div className="bg-[#181818] rounded-lg shadow-lg w-[400px] h-[600px] flex flex-col animate-fadeIn  ">
//              <div className='flex justify-between items-center mb-10 mt-5 mr-10 pr-11'>
//                     <button onClick={onclose} className="text-gray-400 hover:text-white transition">Cancel</button>
//                     <p className="text-center text-white font-semibold text-lg">Raply</p>
//                     <div className="w-16">
//                     </div>

//                 </div>
//     <div className="w-full h-px bg-[#444] mb-4"></div>
//             <div className="flex-1 no-scrollbar overflow-y-auto px-3">
//                 {post && (
//                     <div className="mb-4">
//                         <div className="flex items-start mb-2">
//                             <div className="w-full">
//                                 <p className="text-white font-bold text-sm">{post.postById.username}</p>
//                                 <p className="text-white text-sm">{post.text}</p>
//                             </div>
//                         </div>

//                         {post.image && (
//                             <div className="relative w-full mb-3">
//                                 <img
//                                     src={post.image}
//                                     alt="Post"
//                                     className="w-full h-full object-cover rounded-lg transition-opacity duration-300 "
//                                 />

//                             </div>
//                         )}
//                         <div className="border-b border-[#2d2d2d] mb-2"></div>
//                     </div>
//                 )}

//                 <div className="mb-3"></div>
//                 <div className="space-y-2">
//                     {replies.length > 0 ? (
//                         [...replies].reverse().map((reply ,index) => (
//                             <div key={index} className="flex items-start mb-2">
//                                 <div className="bg-[#181818] p-2.5 rounded-lg text-white w-full">
//                                     <p className="font-bold text-sm mb-0.5">{reply.username}</p>
//                                     <p className="break-words text-sm">{reply.text}</p>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <p className="text-white text-center text-sm">No replies</p>
//                     )}
//                 </div>
//             </div>
//             <div className="p-2">
//                 {error && <p className="text-red-500 text-xs mb-2">{error}</p>}

//                 <div className="mb-2 flex justify-center">
//                     <input
//                         placeholder="Add your comment..."
//                         value={comment}
//                         onChange={(e) => setComment(e.target.value)}
//                         className="w-[330px] p-2   border border-[#2d2d2d] bg-[#181818] rounded-lg text-sm bg-"
//                     />
//                 </div>

//                 <div className="flex justify-end">
//                     <button
//                         className="bg-[#2d2d2d] text-white px-3 py-1.5 rounded-2xl mt-2 ml-5 mr-2 text-sm h-10 w-16"
//                         onClick={handling}
//                         disabled={loading}
//                         // <Image src={comment} alt='' className='hover hover:bg-gray-900 ' />

//                     >
//                         {loading ? <Loading/> : 'Post'}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     </div>
// )
// };

// export default Comment;