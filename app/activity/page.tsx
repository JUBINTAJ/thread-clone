'use client';
import React, { useEffect, useState } from 'react';
import Sidebar from '@/app/componnts/sidebar/sidebar';


function Page() {



    return (
        <div className='flex justify-between'>
            <Sidebar />

            <div className="lay-2 mr-24">
                <div>
                    <p className='text-center pt-8 prata-regular'>Activity</p>
                </div>
                <div className="bg-[#5654543b] w-[630px] md:w-[630px] h-[865px] md:h-[865px] mt-3 border-b-0 border border-[#3b3b3b] rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none rounded-br-none scrollb">
                 
                   
                </div>
            </div>

            <div className='lay-3'></div>
        </div>
    );
}

export default Page;
