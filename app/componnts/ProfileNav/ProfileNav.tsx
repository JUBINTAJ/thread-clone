import Link from 'next/link';
import React from 'react'; 

import { useRouter } from 'next/router';

const ProfileNav = () => {
  const router = useRouter();
  const { pathname } = router;

  const isActive = (path: string) => pathname === path;

  return (
    <div className='mt-5'>
      <div className='flex justify-around gap-5'>
        <Link href='/main/profile'>
          <span className={isActive('/main/profile') ? 'underline' : ''}>Threads</span>
        </Link>
        <Link href='/main/profile/replies'>
          <span className={isActive('/main/profile/replies') ? 'underline' : ''}>Replies</span>
        </Link>
        <Link href='/main/profile/reposts'>
          <span className={isActive('/main/profile/reposts') ? 'underline' : ''}>Reposts</span>
        </Link>
      </div>
      <div className="w-full h-px bg-[#554e4e] mt-4"></div>
    </div>
  );
};

export default ProfileNav;
