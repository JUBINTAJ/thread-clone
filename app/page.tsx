'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import therad from '@/Public/img/threads-logo-w.png';
import home from "@/Public/img/home (2).png";
import like from '@/Public/img/heart (1).png';
import search from '@/Public/img/icons8-search-100 (1).png';
import user from '@/Public/img/user.png';
import pin from '@/Public/img/pin.png';
import plus from '@/Public/img/icons8-plus-100 (1).png'
import menu from '@/Public/img/menu.png';
import { useAppDispatch, useAppSelector } from './hookkkk/Appdispatch';
import { fetchPosts } from '@/store/reducer/postssSlice';
import LoginPrompt from '@/app/componnts/Loginprompt/Loginprompt'

const Page = () => {
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((state) => state.posts);
  const [isLoginPromptOpen, setIsLoginPromptOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleButtonClick = () => {
    setIsLoginPromptOpen(true);
  };

  return (
    <div className='flex justify-between'>
      <div className="lay-1">
        <nav className='p-4 w-full'>
          <div className='flex flex-col items-start justify-start'>
            <div className='mb-4'>
              <Image
                src={therad}
                alt='Threads Logo'
                className='w-10'
              />
            </div>

            <div className='flex flex-col space-y-4 items-center mt-56'>
              <div className='cursor-pointer'>
                <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200'>
                  <Image src={home} alt='Home' className='w-8' />
                </div>
              </div>

              <div onClick={handleButtonClick} className='cursor-pointer'>
                <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200'>
                  <Image src={search} alt='Search' className='w-8' />
                </div>
              </div>
              <div onClick={handleButtonClick} className='cursor-pointer'>

                <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200 '>
                  <Image src={plus} alt='plus' className='w-8' />
                </div>
              </div>


              <div onClick={handleButtonClick} className='cursor-pointer'>
                <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200'>
                  <Image src={like} alt='Likes' className='w-8' />
                </div>
              </div>

              <div onClick={handleButtonClick} className='cursor-pointer'>
                <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200'>
                  <Image src={user} alt='User Profile' className='w-8' />
                </div>
              </div>
            </div>

            <div className='flex flex-col space-y-4 items-center mt-48'>
              <div onClick={handleButtonClick} className='cursor-pointer'>
                <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200 mr-20'>
                  <Image src={pin} alt='Pinned' className='w-10' />
                </div>
              </div>

              <div onClick={handleButtonClick} className='cursor-pointer mr-10'>
                <div className="flex items-center relative group ml-9">
                  <div className="hover:bg-gray-900 p-2 rounded-xl transition duration-200">
                    <Image src={menu} alt="Menu" className="w-8 " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="lay-5">
        <div className="lay-6 border border-[#3b3b3b] w-[630px] h-[865px] border-b-0 mt-14 rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none rounded-br-none scrollb">
          {posts.map((post) => (
            <div key={post._id} className="flex border-[#3b3b3b] border ">
              <div className="flex-shrink-0">
                <img
                  className="w-10 h-10 object-cover ml-6 mt-4 rounded-full"
                  src={post.postById?.profilePic || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                  alt={`${post.postById?.username}'s profile`}
                />
              </div>
              <div className="flex flex-col justify-start ml-4 pt-2 pb-4 w-full">
                <p className="font-semibold">{post.postById?.username}</p>
                <p className="mt-1">{post.text}</p>
                {post.image && (
                  <img
                    className="mt-3 h-[435px] w-[500px] rounded-md object-cover  border border-[#3b3b3b]"
                    src={post.image}
                    alt="Post content" />)}
              </div>
            </div>
          ))}
        </div>
      </div>


      <div>
        <Link href='/login'>
          <button className='bg-white text-black border rounded-md w-20 h-8 mt-7 mr-5 justify-center'>
            Log in
          </button>
        </Link>
      </div>

      <LoginPrompt isOpen={isLoginPromptOpen} onClose={() => setIsLoginPromptOpen(false)} />
    </div>
  );
};

export default Page;
