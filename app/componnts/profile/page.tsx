
'use client';

import React, { useEffect, useState } from 'react';
import Sidebar from '@/app/componnts/sidebar/sidebar';  
import Loading from '@/app/componnts/loading/loading';  
import axiosInstance from '@/app/axios/axiosinstance';
import EditProfileModal from '@/app/componnts/editprofile/editprofile';
import { useAppSelector } from '@/app/hookkkk/Appdispatch';
import { fetchPostByUserId } from '@/store/reducer/postSlice';

const Page: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [status, setStatus] = useState<'initial' | 'loading' | 'success' | 'failed'>('initial');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {post} = useAppSelector((state)=>state.post)

  

  const [onopen, setonopen] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
      setStatus('loading');
      try {
        const userId = localStorage.getItem('userid');
        if (!userId) {
          setStatus('failed');
          console.log('User is not found');
          return
        }
        const response = await axiosInstance.get(`users/${userId}`);
        setUser(response.data.user);
        setStatus('success');
      } catch (error) {
        console.error('Failed :', error);
        setStatus('failed');
      }
    };

    fetchData();
  }, []);



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
        <div className="bg-[#5654543b] w-[630px] md:w-[630px] h-[865px] md:h-[865px] mt-3 border-b-0 border border-[#3b3b3b] rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none rounded-br-none scrollb">
          {user && (
            <div key={user.id} className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex flex-col">
                  <h1 className="text-3xl font-semibold">{user.name}</h1>
                  <p className="text-lg text-gray-500">{user.username}</p>
                </div>
                <div>
                  <img
                    className="w-20 h-20 object-cover rounded-full border-2 border-gray-300"
                    src={user.profilePic || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
                    alt="Profile"
                  />
                </div>
              </div>
              <p className="text-gray-200 pl-5 pb-3">{user.bio}</p>
              <p className="pl-5 text-gray-400">{user.followers.length} Followers</p>
              <button
                className="border border-[#554e4e] border-spacing-2 w-full h-10 rounded-xl hover:text-black hover:bg-white mt-6"
                onClick={()=>setIsModalOpen(true)}
              >
                Edit Profile

            
              </button>
            </div>
          )}

          {post.map( (post)=>{
            return (
          
            <div key={post.id}>
              <div>
                <div>
                {post.image && <img className="image-main" src={post.image} alt="post" />}
                </div>
              </div>

            </div>
          )})}
          {/* <div className='flex justify-between'>
            <div>fnv</div>
            <div>snvk</div>
            <div>nn</div>
            
          </div> */}
        </div>
      </div>

      <div className='lay-3'></div>

       <EditProfileModal isopen={isModalOpen} onclose={()=>setIsModalOpen(false)} >
        <h1></h1>
      </EditProfileModal> 
    </div>
  );
};

export default Page;
