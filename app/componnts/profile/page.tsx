// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'
// import React, { useEffect, useState } from 'react'
// import Sidebar from '../sidebar/sidebar'
// import { useAppDispatch, useAppSelector } from '@/app/hookkkk/Appdispatch'
// import { } from '@/store/reducer/postssSlice'
// import { fromJSON } from 'postcss'
// import { FcLike } from "react-icons/fc";
// import {  userupdate } from '@/store/reducer/userSlice'
// import { fetchUser } from '@/store/reducer/usergetSlice'



// const page: React.FC = () => {

//   const dispatch = useAppDispatch()
  
//   // const[name ,setName]=useState<string>("")
//   // const[username ,setUserName]=useState<string>("")
//   // const[Profilepic ,setProfilePic]=useState<string>("")
//   // const[userbio ,setUserBio]=useState<string>("")



//   const { user} = useAppSelector((state) => state.userget)

//   useEffect(() => {
//     const userId=localStorage.getItem('userid')
//     dispatch(fetchUser(userId));
// }, [dispatch]);



//   return (

//  <div className='flex justify-between'>
//       <div>
//         <Sidebar />
//       </div>

//       <div className="lay-2 mr-24 ">
//         <div className=''>
//           <p className='  text-center   '>Profile</p>

//         </div>
//         <div className=" border border-[#181818] border-[#3b3b3b]  w-[630px] h-[865px] border-b-0 mt-14   rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none rounded-br-none scrollb " >

// {user.map((user)=>(
//   <div key={user.id}>
//       <div className='p-1'>  <img className='w-10 ml-6 mt-4' src={user.profilePic || ' https://cdn-icons-png.flaticon.com/512/149/149071.png'  } alt="" /></div>

//     <div>
//     <p className='pb-4 pt-2 pl-4'>{user.name}</p>
//     <p className='pl-5 pb-3'>{user.bio}</p>

//     </div>

//   </div>
// ))}
    
         
        

//         </div>

//       </div>



//       <div className='lay-3'>

//       </div>



//     </div>


//   )
// }

// export default page
// // 'use client'

// // import { useEffect } from 'react';
// // import { useAppDispatch, useAppSelector } from '@/app/hookkkk/Appdispatch';
// // import { fetchPostByUserId } from '@/store/reducer/postSlice';
// // import Sidebar from '../sidebar/sidebar';

// // const Page: React.FC = () => {
// //   const dispatch = useAppDispatch();
// //   const { post, status, error } = useAppSelector((state) => state.post);

// //   useEffect(() => {
// //     const userId = localStorage.getItem('userid');
// //     if (userId) {
// //       dispatch(fetchPostByUserId(userId));
// //     }
// //   }, [dispatch]);

// //   return (
// //     <div className='flex justify-between'>
// //       <Sidebar />
// //       <div className="lay-2 mr-24">
// //         <p className='text-center'>Profile</p>
// //         <div className="border border-[#181818] border-[#3b3b3b] w-[630px] h-[865px] border-b-0 mt-14 rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none rounded-br-none scrollb">
// //           {status === "loading" && <p className='text-center'>Loading...</p>}
// //           {error && <p className='text-center text-red-500'>{error}</p>}
// //           {post.length > 0 ? (
// //             post.map((post) => (
// //               <div key={post.id}>
// //                 <div className='p-1'>
// //                   <img className='w-10 ml-6 mt-4' src={post.profilePic || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="" />
// //                 </div>
// //                 <div>
// //                   <p className='pb-4 pt-2 pl-4'>{post.username}</p>
// //                   <p className='pl-5 pb-3'>{post.text}</p>
// //                   {post.image && <img className='h-[435px] w-auto rounded-md object-cover border border-[#3b3b3b]' src={post.image} alt="" />}
// //                 </div>
// //               </div>
// //             ))
// //           ) : (
// //             <p className='text-center'>No posts available.</p>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Page;


'use client'

import React, { useEffect } from 'react';
import Sidebar from '../sidebar/sidebar';
import { useAppDispatch, useAppSelector } from '@/app/hookkkk/Appdispatch';
import { fetchUser } from '@/store/reducer/usergetSlice';

const Page: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user, stutas } = useAppSelector((state) => state.userget);

  useEffect(() => {
    const userId = localStorage.getItem('userid');
    if (userId) {
      dispatch(fetchUser(userId));
    }
  }, [dispatch]);

  if (stutas === 'loading') {
    return <p>Loading...</p>;
  }

  if (stutas === 'failed') {
    return <p>Error loading user data.</p>;
  }

  return (
    <div className='flex justify-between'>
      <div>
        <Sidebar />
      </div>

      <div className="lay-2 mr-24 ">
        <div className=''>
          <p className='text-center'>Profile</p>
        </div>
        <div className="border border-[#181818] border-[#3b3b3b] w-[630px] h-[865px] border-b-0 mt-14 rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none rounded-br-none scrollb">
          {user && (
            <div key={user. id}>
              <img className='w-20  mt-4 ml-[524px] ' src={user.profilePic || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="" />
              <h1 className=' mb-16 pl-4 text-3xl'>{user.name}</h1>
              <p className='pl-5 pb-3'>{user.bio}</p>
              <p>{user.followers}</p>
              
            </div>
          )}
          <button className='border border-[#554e4e] border-spacing-2 w-full h-10 rounded-lg '>edit profile</button>

        </div>
      </div>

      <div className='lay-3'>
        {/* Additional content */}
      </div>
    </div>
  );
};

export default Page;
