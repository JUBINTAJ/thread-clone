import React, { useEffect, useState } from 'react';
import Sidebar from '@/app/componnts/sidebar/sidebar';
import axiosInstance from '../../axios/axiosinstance';
import { getUserId } from '../../lib/utils/getCookie';

interface User {
    id:string;
    name:string;
    username:string;
    email:string;
    profilpic:string;
}

interface notification {
    id:string;
    description:string;
     senderuserId:User

}
 
async function getnotification(){
    const userId=getUserId()
    const res =await axiosInstance.get(`users/notification/${userId}`)
    return res.data.notification
}

 async function Page() {

    let notification : notification[] = []

    try{
        notification=await getnotification()
        console.log(notification)
    }catch(error){
        console.error('errorr',error)
    }



    return (
        <div className='flex justify-between'>
            <Sidebar />

            <div className="lay-2 mr-24">
                <div>
                    <p className='text-center pt-8 prata-regular'>Activity</p>
                </div>
                <div className="bg-[#5654543b] w-[630px] md:w-[630px] h-[865px] md:h-[865px] mt-3 border-b-0 border border-[#3b3b3b] rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none rounded-br-none scrollb">

                <div className='ml-3 py-2 '>
              {notification.length === 0 ? (
                    <p>No notifications available...</p>
              ) : (
               
                notification.map((notification) => (
                    <div key={notification.id} className="border-b border-[#383939] py-4">
                        <div className="flex items-center">
                            <div className="">
                           
                            </div>
                            <div className="flex flex-col justify-start ml-2">
                                <div className="text-white">{notification.senderuserId.name}</div>
                                <div className="text-neutral-400 ">{notification.description}</div>
                            </div>
                        </div>
                    </div>
               ) ))}
            </div>
                </div>
            </div>

            <div className='lay-3'></div>
        </div>
    );
}

export default Page;


