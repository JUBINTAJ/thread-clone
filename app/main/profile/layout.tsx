

import Profile from '@/app/componnts/profile/profile';
import React from 'react';
import Sidebar from '@/app/componnts/sidebar/sidebar';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-between">
      <Sidebar />

      <div className="flex-grow flex flex-col items-center mr-24">
        <div className="text-center pt-8 prata-regular mb-2">
          <p>Profile</p>
        </div>

        <div className="bg-[#5654543b] w-full md:w-[630px] h-auto md:h-[865px] border-b-0 border border-[#3b3b3b] rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none rounded-br-none scrollb">
          <Profile />

          <div className="mt-4">
            {children}
          </div>
        </div>
      </div>

      <div className="flex-none lay-3">
      </div>
    </div>
  );
}

export default Layout;

