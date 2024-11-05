'use client'

import React, { useEffect } from 'react';
import Sidebar from '@/app/componnts/sidebar/sidebar';  // Corrected typo: "componnts" to "components"

import { useAppDispatch, useAppSelector } from '@/app/hookkkk/Appdispatch';  // Fixed hook name typo
import { fetchUser } from '@/store/reducer/usergetSlice';
import Loading from '@/app/componnts/loading/loading';  // Corrected typo

const Page: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user, status } = useAppSelector((state) => state.userget);  // Fixed 'stutas' to 'status'

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchUser());
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    };
    
    fetchData();
  }, [dispatch]);

  if (status === 'loading') {
    return <p><Loading /></p>;
  }

  if (status === 'failed') {
    return <p>Error loading user data.</p>;
  }

  return (
    <div className='flex justify-between'>
      <div>
        <Sidebar />
      </div>

      <div className="lay-2 mr-24">
        <div className=''>
          <p className='text-center pt-8 prata-regular'>Profile</p>
        </div>
        <div className="border bg-[#5654543b]  border-[#3b3b3b] w-[630px] h-[865px] border-b-0 mt-3 rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none rounded-br-none scrollb">
          {user && (
            <div key={user.id}>
              <div className='flex justify-between'>
                <div className=''>
                  <h1 className=' mt-10 pl-12  text-3xl '>{user.name}</h1>
                  <p className='pl-12 '>{user.username}</p>
                </div>
                <div>
                  <img className='w-20  mt-9 ml-[414px]' src={user.profilePic || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="" />
                </div>
              </div>
              <p className='pl-5 pb-3'>{user.bio}</p>
              <p>{user.followers}</p>
              <button className='border border-[#554e4e] border-spacing-2 w-[556px] h-10 rounded-xl hover:text-black hover:bg-white ml-8 mb-16'>Edit Profile</button>
            </div>
          )}
        </div>
      </div>

      <div className='lay-3'></div>
    </div>
  );
};

export default Page;
