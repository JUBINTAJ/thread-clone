'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Sidebar from '../sidebar/sidebar'
import { useAppDispatch, useAppSelector } from '@/app/hookkkk/Appdispatch'
import { } from '@/store/reducer/postssSlice'
import { fromJSON } from 'postcss'
import { FcLike } from "react-icons/fc";
import {  userupdate } from '@/store/reducer/userSlice'
import { fetchUser } from '@/store/reducer/usergetSlice'



const page: React.FC = () => {

  const dispatch = useAppDispatch()
  
  const[name ,setName]=useState<string>("")
  const[username ,setUserName]=useState<string>("")
  const[Profilepic ,setProfilePic]=useState<string>("")
  const[userbio ,setUserBio]=useState<string>("")



  const { user} = useAppSelector((state) => state.userget)

  useEffect(() => {
    const userId=localStorage.getItem('userid')
    dispatch(fetchUser(userId));
}, [dispatch]);

useEffect(() => {
    const userId = localStorage.getItem('userid');
    if (userId && username.length > 0) {
        const user = userId.find((userId) => user.id === userId);
        if (user) {
            setName(user.name || '');
            setUserName(user.username || '');
            setProfilePic(user.profilePic || 'https://cdn-icons-png.flaticon.com/512/149/149071.png');
            setUserBio(user.bio || '');
        }
    }
}, [username]);

  return (



    <div className='flex justify-between'>
      <div>
        <Sidebar />
      </div>

      <div className="lay-2 mr-24 ">
        <div className=''>
          <p className='  text-center   '>Profile</p>

        </div>
        <div className=" border border-[#181818] border-[#3b3b3b]  w-[630px] h-[865px] border-b-0 mt-14   rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none rounded-br-none scrollb " >

      
            <div  >
              <div className='p-1'>  <img className='w-10 ml-6 mt-4' src={user.profilePic } alt="" /></div>
              <div>
                <p className='pb-4 pt-2 pl-4'>{user.username}</p>
                <p className='pl-5 pb-3'>{user.bio}</p>
                {user.image && <img className='h-[435px] w-auto rounded-md  object-cover border border-[#3b3b3b] ' src={user.image} />}
              </div>
            </div>
        

        </div>

      </div>



      <div className='lay-3'>

      </div>




    </div>


  )
}

export default page
// 'use client'

// import { useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from '@/app/hookkkk/Appdispatch';
// import { fetchPostByUserId } from '@/store/reducer/postSlice';
// import Sidebar from '../sidebar/sidebar';

// const Page: React.FC = () => {
//   const dispatch = useAppDispatch();
//   const { post, status, error } = useAppSelector((state) => state.post);

//   useEffect(() => {
//     const userId = localStorage.getItem('userid');
//     if (userId) {
//       dispatch(fetchPostByUserId(userId));
//     }
//   }, [dispatch]);

//   return (
//     <div className='flex justify-between'>
//       <Sidebar />
//       <div className="lay-2 mr-24">
//         <p className='text-center'>Profile</p>
//         <div className="border border-[#181818] border-[#3b3b3b] w-[630px] h-[865px] border-b-0 mt-14 rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none rounded-br-none scrollb">
//           {status === "loading" && <p className='text-center'>Loading...</p>}
//           {error && <p className='text-center text-red-500'>{error}</p>}
//           {post.length > 0 ? (
//             post.map((post) => (
//               <div key={post.id}>
//                 <div className='p-1'>
//                   <img className='w-10 ml-6 mt-4' src={post.profilePic || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="" />
//                 </div>
//                 <div>
//                   <p className='pb-4 pt-2 pl-4'>{post.username}</p>
//                   <p className='pl-5 pb-3'>{post.text}</p>
//                   {post.image && <img className='h-[435px] w-auto rounded-md object-cover border border-[#3b3b3b]' src={post.image} alt="" />}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className='text-center'>No posts available.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
