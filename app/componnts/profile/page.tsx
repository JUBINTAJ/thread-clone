


'use client'

import React, { useEffect } from 'react';
import Sidebar from '@/app/componnts/sidebar/sidebar';
import { useAppDispatch, useAppSelector } from '@/app/hookkkk/Appdispatch';
import { fetchUser } from '@/store/reducer/usergetSlice';
import Loading from '@/app/componnts/loading/loading';

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
    return <p ><Loading/> </p>;
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
          <p className='text-center pt-8'>Profile</p>
        </div>
        <div className="border bg-[#5654543b]  border-[#3b3b3b] w-[630px] h-[865px] border-b-0 mt-3 rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none rounded-br-none scrollb">
          {user && (
            <div key={user. id}>

              <div className='flex justify-between'>
                <div className=''>
                <h1 className=' mt-10 pl-12  text-3xl '>{user.name}</h1>
                <p className='pl-12 '>{user.username}</p>
                
                </div>
            
              <div>
                   <img className='w-20  mt-9 ml-[414px]  ' src={user.profilePic || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="" />

             </div>
              <p className='pl-5 pb-3'>{user.bio}</p>
              <p>{user.followers}</p>
              </div>

              <button className='border border-[#554e4e] border-spacing-2 w-[556px] h-10 rounded-xl hover:text-black hover:bg-white ml-8 mb-16'>edit profile</button>

            </div>
          )}

        </div>


      </div>

      <div className='lay-3'>
        {/* Additional content */}
      </div>
    </div>
  );
};

export default Page;
