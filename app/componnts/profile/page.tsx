// 'use client'

// import React, { useEffect, useState } from 'react';
// import Sidebar from '@/app/componnts/sidebar/sidebar';  
// import { useAppDispatch, useAppSelector } from '@/app/hookkkk/Appdispatch';  
// // import { fetchUser } from '@/store/reducer/usergetSlice';
// import Loading from '@/app/componnts/loading/loading';  
// import axiosInstance from '@/app/axios/axiosinstance';
// import EditProfileModal from '../editprofile/editprofile';
// const Page: React.FC = () => {

// const[user ,setuser]=useState<any>(null)
// const[status,setstatus]=useState<'initail'|'loading'|'success'|'failed'>('initail')

// const [isModalOpen, setIsModalOpen] = useState(false);

// const openModal = () => setIsModalOpen(true);

// const closeModal = () => setIsModalOpen(false);






//   // const dispatch = useAppDispatch();
//   // const { user, status } = useAppSelector((state) => state.userget);  
//   useEffect(() => {
//     const fetchData = async () => {
//       setstatus("loading")
//       try {
//         const userId=localStorage.getItem("userid")
//         if(!userId){
//           setstatus('failed')
//           console.log('user is not found')
//         }
//         const response=await axiosInstance.get(`users/${userId}`)
//         setuser (response.data.user)
//        setstatus('success')
//       } catch (error) {
//         console.error('Failed to fetch user:', error);
//       }
//     };
    
//     fetchData();
//   }, []);

//   if (status === 'loading') {
//     return <p><Loading /></p>;
//   }

//   if (status === 'failed') {
//     return <p>Error loading user data.</p>;
//   }

//   return (
//     <div className='flex justify-between'>
//       <div>
//         <Sidebar />
//       </div>

//       <div className="lay-2 mr-24">
//         <div className=''>
//           <p className='text-center pt-8 prata-regular'>Profile</p>
//         </div>
//         <div className="border bg-[#5654543b] border-[#3b3b3b] w-[630px] h-[865px] mt-3 rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none rounded-br-none scrollb mx-auto">
//   {user && (
//     <div key={user.id} className="p-6"> 
//         <div className="flex justify-between items-center mb-4">
//         <div className="flex flex-col">
//           <h1 className="text-3xl font-semibold">{user.name}</h1>
//           <p className="text-lg text-gray-500">{user.username}</p>
//         </div>
//          <div>
//           <img
//             className="w-20 h-20 object-cover rounded-full border-2 border-gray-300"  src={user.profilePic || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
//             alt="Profile"/></div>
//       </div>
//       <p className="text-gray-200 pl-5 pb-3">{user.bio}</p>
//       <p className="pl-5 text-gray-400">{user.followers.length} Followers</p>
//       <button className="border border-[#554e4e] border-spacing-2 w-full h-10 rounded-xl hover:text-black hover:bg-white mt-6">
//         Edit Profile
//       </button>
//       <EditProfileModal isopen={isModalOpen} onclose={closeModal}>
//   <h1></h1>
// </EditProfileModal>
//     </div>
//   )}
// </div>

//       </div>

//       <div className='lay-3'></div>
//     </div>
//   );
// };

// export default Page;
  

'use client';

import React, { useEffect, useState } from 'react';
import Sidebar from '@/app/componnts/sidebar/sidebar';  
import Loading from '@/app/componnts/loading/loading';  
import axiosInstance from '@/app/axios/axiosinstance';
import EditProfileModal from '@/app/componnts/editprofile/editprofile';

const Page: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [status, setStatus] = useState<'initial' | 'loading' | 'success' | 'failed'>('initial');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const fetchData = async () => {
      setStatus('loading');
      try {
        const userId = localStorage.getItem('userid');
        if (!userId) {
          setStatus('failed');
          console.log('User is not found');
          return;
        }
        const response = await axiosInstance.get(`users/${userId}`);
        setUser(response.data.user);
        setStatus('success');
      } catch (error) {
        console.error('Failed to fetch user:', error);
        setStatus('failed');
      }
    };

    fetchData();
  }, []);

  if (status === 'loading') {
    return <div className="text-center"><Loading /></div>;
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
        <div className="border bg-[#5654543b] border-[#3b3b3b] w-[630px] h-[865px] mt-3 rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none rounded-br-none scrollb mx-auto">
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
                onClick={openModal}
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </div>

      <div className='lay-3'></div>

      {/* EditProfileModal */}
      <EditProfileModal isopen={isModalOpen} onclose={closeModal} >
        <h1></h1>
      </EditProfileModal>
    </div>
  );
};

export default Page;
