'use client';
import React, { useEffect } from 'react';
import Sidebar from '@/app/componnts/sidebar/sidebar';
import { useAppDispatch, useAppSelector } from '../hookkkk/Appdispatch';
import { fetchsearch } from '@/store/reducer/usergetSlice';

function Page() {
    const dispatch = useAppDispatch();
    const { users } = useAppSelector((state) => state.userget);

    useEffect(() => {
        dispatch(fetchsearch());
    }, [dispatch]);

    return (
        <div className='flex justify-between'>
            <div>
                <Sidebar />
            </div>

            <div className="lay-2 mr-24">
                <div>
                    <p className='text-center pt-8'>Search</p>
                </div>
                <div className="border bg-[#5654543b] border-[#3b3b3b] w-[630px] h-[865px] border-b-0 mt-3 rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none rounded-br-none scrollb">
                    <div>
                        <input
                            type="text"
                            placeholder='Search'
                            className='bg-black ml-8 h-11 w-[570px] mt-6 rounded-xl border border-[#3b3b3b] pl-8 text-[#3b3b3b]'
                        />
                    </div>
                    <p className='ml-8 mt-6 text-[#464343]'>Follow suggestions</p>
                    <div>
    {users && users.map((user) => (
        <div key={user.id} className="flex items-center mb-6"> 
            <img 
                className='w-10 h-10 rounded-full ml-6' 
                src={user.profilePic || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} 
                alt="Profile" 
            />
            <div className='ml-3 flex flex-col flex-grow'>
                <p className='mb-1'>{user.name}</p>
                <p className='text-gray-400'>{user.username}</p>
                <p className='mt-1'>{user.followers.length} followers</p>
                <div className="w-full h-px bg-[#3b3b3b] mt-2"></div> 
            </div>
            <div className='mr-6 flex items-center'>
                <button className='border border-[#3b3b3b] w-28 h-9 rounded-xl'>Follow</button>
            </div>
        </div>
    ))}
</div>





                </div>
            </div>

            <div className='lay-3'>
                {/* Additional content */}
            </div>
        </div>
    );
}

export default Page;
