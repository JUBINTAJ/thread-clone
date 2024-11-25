// /app/page.tsx or /app/page.js (depending on your setup)
import React from 'react';
import Sidebar from '@/app/componnts/sidebar/sidebar';
import axiosInstance from '../../axios/axiosinstance';
import { cookies } from 'next/headers';

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  profilpic: string;
}

interface Notification {
  id: string;
  description: string;
  senderuserId: User;
}
async function getServerNotifications(): Promise<Notification[]> {
  const cookieStore = cookies();
  const userId = cookieStore.get('userId')?.value;

  if (!userId) {
    return [];
  }
  try {
    const res = await axiosInstance.get(`users/notification/${userId}`);
    return res.data.notification || [];
  } catch (error) {
    console.error('Error fetching notifications:', error);
    return [];
  }
}

export default async function Page() {

  const notifications = await getServerNotifications();

  return (
    <div className='flex justify-between'>
      <Sidebar />

      <div className="lay-2 mr-24">
        <div>
          <p className='text-center pt-8 prata-regular'>Activity</p>
        </div>
        <div className="bg-[#5654543b] w-[630px] md:w-[630px] h-[865px] md:h-[865px] mt-3 border-b-0 border border-[#3b3b3b] rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none rounded-br-none scrollb">
          <div className='ml-3 py-2'>
            {notifications.length === 0 ? (
              <p className='flex justify-center prata-regular'>No notifications available...</p>
            ) : (
              notifications.map((notification) => (
                <div key={notification.id} className="border-b border-[#383939] py-4">
                  <div className="flex items-center">
                    <div className="">
                      <img
                        src={notification.senderuserId.profilpic || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                        alt={notification.senderuserId.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-start ml-2">
                      <div className="text-white">{notification.senderuserId.name}</div>
                      <div className="text-neutral-400 ">{notification.description}</div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className='lay-3'></div>
    </div>
  );
}


