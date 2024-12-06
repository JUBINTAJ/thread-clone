// import React from 'react';
// import Sidebar from '@/app/componnts/sidebar/sidebar';
// import axiosInstance from '../../axios/axiosinstance';
// import { cookies } from 'next/headers';
// import { getUserId } from '@/app/lib/utils/getCookie';

// interface User {
//   id: string;
//   name: string;
//   username: string;
//   email: string;
//   profilpic: string;
// }

// interface Notification {
//   id: string;
//   description: string;
//   senderuserId: User;
// }
// async function getServerNotifications(): Promise<Notification[]> {
//   const cookieStore = cookies();
//   const userId = cookieStore.get('userId')?.value;

//   console.log('userr')
  

//   if (!userId) {
//     return [];
//   }
//   try {
//     const res = await axiosInstance.get(`users/notification/${userId}`);
//     return res.data.notification || [];
//   } catch (error) {
//     console.error('Error fetching notifications:', error);
//     return [];
//   }
// }

// export default async function Page() {

//   const notifications = await getServerNotifications();
//   console.log('Notifications:', notifications);

//   return (
//     <div className='flex justify-between'>
//       <Sidebar />

//       <div className="lay-2 mr-24">
//         <div>
//           <p className='text-center pt-8 prata-regular'>Activity</p>
//         </div>
//         <div className="bg-[#5654543b] w-[630px] md:w-[630px] h-[865px] md:h-[865px] mt-3 border-b-0 border border-[#3b3b3b] rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none rounded-br-none scrollb">
//           <div className='ml-3 py-2'>
//             {notifications.length === 0 ? (
//               <p className='flex justify-center prata-regular'>No notifications available...</p>
//             ) : (
//               notifications.map((notification) => (
//                 <div key={notification.id} className="border-b border-[#383939] py-4">
//                   <div className="flex items-center">
//                     <div className="">
//                       <img
//                         src={notification.senderuserId.profilpic || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
//                         alt={notification.senderuserId.name}
//                         className="w-10 h-10 rounded-full object-cover"
//                       />
//                     </div>
//                     <div className="flex flex-col justify-start ml-2">
//                       <div className="text-white">{notification.senderuserId.name}</div>
//                       <div className="text-neutral-400 ">{notification.description}</div>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </div>

//       <div className='lay-3'></div>
//     </div>
//   );
// }
'use client';

import React, { useEffect, useState } from 'react';
import axiosInstance from '@/app/axios/axiosinstance';
import Sidebar from '@/app/componnts/sidebar/sidebar';

interface User {
  _id: string;
  name: string;
  username: string;
  email: string;
  profilePic: string;
}

interface Notification {
  _id: string;
  description: string;
  senderUserId: User;
  reciveUserId: string;
  createdAt: string;
  type: string;
  seen: boolean;
}

const Page: React.FC = () => {
  const [notification, setNotification] = useState<Notification[]>([]);
  const [status, setStatus] = useState<'loading' | 'success' | 'failed'>('loading');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      const userId = localStorage.getItem('userid');
      
      if (!userId) {
        setError('User ID is missing in localStorage');
        setStatus('failed');
        return;
      }

      console.log('User ID from localStorage:', userId);  

      try {
        const res = await axiosInstance.get(`users/notification/${userId}`);
        
        console.log('Fetched Notifications:', res.data);
        
        if (res.data.length > 0) {
          setNotification(res.data);
          setStatus('success');
        } else {
          setError('No notifications found for this user');
          setStatus('failed');
        }
      } catch (error: any) {
        setError('Error fetching notifications');
        setStatus('failed');
        console.error('Error fetching notifications:', error); 
      }
    };

    fetchNotifications();
  }, []);

  // Check the current status
  console.log("Current status:", status);

  if (status === 'loading') {
    return <p>Loading notifications...</p>;
  }

  if (status === 'failed' && error) {
    return <p>{error}</p>;
  }

  return (
    <div className='flex justify-between'>
      <Sidebar />

      <div className="lay-2 mr-24">
        <div>
          <p className='text-center pt-8 prata-regular'>Activity</p>
        </div>
        <div className="bg-[#5654543b] w-[630px] md:w-[630px] h-[865px] md:h-[865px] mt-3 border-b-0 border border-[#3b3b3b] rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none rounded-br-none scrollb">
          <div className='ml-3 py-2'>
            {notification.length === 0 ? (
              <p>No notifications available.</p>
            ) : (
              <ul>
                {notification.map((notif) => {
                  console.log("Rendering notification:", notif); 
                  return (
                    <li key={notif._id}>
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <img
                          src={notif.senderUserId.profilePic || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                          alt={notif.senderUserId.name}
                          width={50}
                          height={50}
                          style={{ borderRadius: '50%' }}
                        />
                        <div style={{ marginLeft: '10px' }}>
                          <strong>{notif.senderUserId.name}</strong>
                          <p>{notif.description}</p>
                          <div>{new Date(notif.createdAt).toLocaleString()}</div> {/* Optional: Display date */}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className='lay-3'></div>
    </div>
  );
};

export default Page;
