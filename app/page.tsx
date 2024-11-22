// 'use client';

// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import therad from '@/Public/img/threads-logo-w.png';
// import home from "@/Public/img/home (3).png"
// import like from '@/Public/img/like.png'
// import plus from '@/Public/img/plus.png'
// import search from '@/Public/img/loupe.png'
// import user from '@/Public/img/user (1).png'
// import pin from '@/Public/img/pin (1).png'
// import menu from '@/Public/img/menu (1).png'
// import { useAppDispatch, useAppSelector } from './hookkkk/Appdispatch';
// import { fetchPosts } from '@/store/reducer/postssSlice';
// import LoginPrompt from '@/app/componnts/Loginprompt/Loginprompt'
// import comment from '@/Public/img/chat (1).png'
// import repost from '@/Public/img/repeat.png'
// import share from '@/Public/img/send.png'
// import Likebutton from '@/app/componnts/likebutton/likebutton'
// import Mainloading from '@/app/componnts/loadinginall/mainload'
// import arrow from '@/Public/img/Chevron Circle Down.svg'


// const Page = () => {
//   const dispatch = useAppDispatch();
//   const { posts,status } = useAppSelector((state) => state.posts);
//   const [isLoginPromptOpen, setIsLoginPromptOpen] = useState(false);

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   const handleButtonClick = () => {
//     setIsLoginPromptOpen(true);
//   };

//   return (
//     <div className='flex justify-between'>
//       <div className="lay-1">
//         <nav className='p-4 w-full'>
//           <div className='flex flex-col items-start justify-start'>
//             <div className='mb-4'>
//               <Image
//                 src={therad}
//                 alt='Threads Logo'
//                 className='w-10'
//               />
//             </div>

//             <div className='flex flex-col space-y-4 items-center mt-56'>
//               <div className='cursor-pointer'>
//                 <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200'>
//                   <Image src={home} alt='Home' className='w-8' />
//                 </div>
//               </div>

//               <div onClick={handleButtonClick} className='cursor-pointer'>
//                 <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200'>
//                   <Image src={search} alt='Search' className='w-8' />
//                 </div>
//               </div>
//               <div onClick={handleButtonClick} className='cursor-pointer'>

//                 <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200 '>
//                   <Image src={plus} alt='plus' className='w-8' />
//                 </div>
//               </div>


//               <div onClick={handleButtonClick} className='cursor-pointer'>
//                 <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200'>
//                   <Image src={like} alt='Likes' className='w-8' />
//                 </div>
//               </div>

//               <div onClick={handleButtonClick} className=''>
//                 <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200'>
//                   <Image src={user} alt='User Profile' className='w-8' />
//                 </div>
//               </div>
//             </div>

//             <div className='flex flex-col space-y-4 items-center mt-48'>
//               <div onClick={handleButtonClick} className='cursor-pointer'>
//                 <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200 mr-20'>
//                   <Image src={pin} alt='Pinned' className='w-10' />
//                 </div>
//               </div>

//               <div onClick={handleButtonClick} className='cursor-pointer mr-10'>
//                 <div className="flex items-center relative group mr-10">
//                   <div className="hover:bg-gray-900 p-2 rounded-xl transition duration-200">
//                     <Image src={menu} alt="Menu" className="w-8 " />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>

//       <div className="lay-5">
//       <p className='  text-center pt-8 prata-regular '>For you  </p>

//       <div className="  bg-[#5654543b] w-[630px] h-[865px] mt-3 border-b-0 border border-[#3b3b3b]   rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none rounded-br-none scrollb " >
//       {/* {status === 'loading' ? (
//   <Mainloading />
// ) : ( */}

// {
//   posts.map((post) => {
//     return (
//       <div key={post._id} className="flex border-[#3b3b3b] border">
//         <div className="p-2">
//           <img
//             className="w-10 ml-5 h-10 object-cover rounded-full"
//             src={post.postById?.profilePic || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
//             alt=""
//           />
//         </div>
//         <div className="flex-1 p-2">
//           <div className="flex justify-between items-start">
//             <p className="font-semibold">{post.postById ? post.postById.username : 'Unknown User'}</p>
//             <h1 className="text-gray-500 text-lg">...</h1>
//           </div>
//           <p className="pb-2">{post.text}</p>
//           {post.image && <img className="image-main" src={post.image} alt="post" />}
//           <div className="flex items-center gap-8">
//             <Likebutton initialLike={post.likes.length} postId={post._id} likedUser={post.likes} />
//             <div>
//               <Image
//                 src={comment}
//                 alt=""
//                 className="hover:bg-gray-900"
//                 onClick={handleButtonClick}
//               />
//             </div>
//             <div>
//               <Image
//                 src={repost}
//                 alt=""
//                 className="hover:bg-gray-900 w-5"
//                 onClick={handleButtonClick}
//               />
//             </div>
//             <div>
//               <Image
//                 src={share}
//                 alt=""
//                 className="hover:bg-gray-900 w-5"
//                 onClick={handleButtonClick}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   })}
// {/* // )} */}

// </div>
//       </div>


//       <div>
//         <Link href='/login'>
//           <button className='bg-white text-black border rounded-md w-20 h-8 mt-7 mr-5 justify-center'>
//             Log in
//           </button>
//         </Link>
//       </div>

//       <LoginPrompt isOpen={isLoginPromptOpen} onClose={() => setIsLoginPromptOpen(false)} />
//     </div>
//   );
// };

// export default Page;




"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {

  const router = useRouter();

  useEffect(() => {

      router.push('/login');

  }, [router]);

  return (

    <div className="body-home bg-black">
    
          <img
            className="w-32"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Threads_%28app%29.png/640px-Threads_%28app%29.png"
            alt="Threads logo"
            
          />
          <p className="text-white text-xl mt-4">Threads</p>
      
    </div>
  );
};

export default Home;
