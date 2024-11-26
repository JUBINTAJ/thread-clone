'use client'
import React, { useState } from 'react'
import therad from '@/Public/img/threads-logo-w.png'
import home from "@/Public/img/home (3).png"
import like from '@/Public/img/Img - Like.svg'
import plus from '@/Public/img/plus.png'
import search from '@/Public/img/loupe.png'
import user from '@/Public/img/Img - Profile.svg'
import pin from '@/Public/img/pin (1).png'
import menu from '@/Public/img/menu (1).png'
import Image from 'next/image'
import Link from 'next/link'
import Addpost from '@/app/componnts/addpost/addpost'
import Modal from '@/app/componnts/modal/modal'
import Likett from '@/Public/img/Vector (2).svg'

function Sidebar() {
  const [onopen, setonopen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w- p-4 lg:h-screen  overflow-y-auto">
        <nav className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start">
            <div className="mb-4">
              <Image src={therad} alt="img" className="w-10" />
            </div>
            <div className="flex flex-col space-y-4 items-center mt-56">
              <Link href="/main">
                <div className="hover:bg-gray-900 p-2 rounded-xl transition duration-200">
                  <Image src={home} alt="home" className="w-8" />
                </div>
              </Link>

              <Link href="/main/search">
                <div className="hover:bg-gray-900 p-2 rounded-xl transition duration-200">
                  <Image src={search} alt="search" className="w-8" />
                </div>
              </Link>

              <Link href={""} onClick={() => setonopen(true)}>
                <div className="hover:bg-gray-900 p-2 rounded-xl transition duration-200">
                  <Image src={plus} alt="plus" className="w-8" />
                </div>
              </Link>

              <Addpost isopen={onopen} onclose={() => setonopen(false)} />

              <Link href="/main/activity">
                <div
                  className="hover:bg-gray-900 p-2 rounded-xl transition duration-200"
                  onClick={() => setLiked(!liked)}
                >
                  <Image src={liked ? Likett : like} alt="like" className="w-8" />
                </div>
              </Link>

              <Link href="/main/profile">
                <div className="hover:bg-gray-900 p-2 rounded-xl transition duration-200">
                  <Image src={user} alt="user" className="w-8" />
                </div>
              </Link>
            </div>
            <div className='mt-32'>

            </div>

            <div className="flex flex-col space-y-4 items-center mt-12">
              <div className="hover:bg-gray-900 p-2 rounded-xl transition duration-200">
                <Image src={pin} alt="pin" className="w-10" />
              </div>

              <div className="flex items-center relative group cursor-pointer">
                <div
                  className="hover:bg-gray-900 p-2 rounded-xl transition duration-200"
                  onClick={handleLogoutClick}
                >
                  <Image src={menu} alt="menu" className="w-8" />
                </div>
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Navbar (Bottom) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-black text-white p-4 flex justify-between items-center">
        <Link href="/main">
          <div className="hover:bg-gray-900 p-2 rounded-xl transition duration-200">
            <Image src={home} alt="home" className="w-8" />
          </div>
        </Link>

        <Link href="/main/search">
          <div className="hover:bg-gray-900 p-2 rounded-xl transition duration-200">
            <Image src={search} alt="search" className="w-8" />
          </div>
        </Link>

        <Link href={""} onClick={() => setonopen(true)}>
          <div className="hover:bg-gray-900 p-2 rounded-xl transition duration-200">
            <Image src={plus} alt="plus" className="w-8" />
          </div>
        </Link>

        <Link href="/main/activity">
          <div
            className="hover:bg-gray-900 p-2 rounded-xl transition duration-200"
            onClick={() => setLiked(!liked)}
          >
            <Image src={liked ? Likett : like} alt="like" className="w-8" />
          </div>
        </Link>

        <Link href="/main/profile">
          <div className="hover:bg-gray-900 p-2 rounded-xl transition duration-200">
            <Image src={user} alt="user" className="w-8" />
          </div>
        </Link>
      </div>

      {/* Mobile Top Bar with Therad Image (visible on small screens only) */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-black text-white p-4 flex justify-center items-center">
        <Image src={therad} alt="Therad Logo" className="w-10" />
      </div>
    </div>
  );
}

export default Sidebar;






// 'use client'
// import React, { useState } from 'react';
// import therad from '@/Public/img/threads-logo-w.png';
// import home from "@/Public/img/home (3).png";
// import like from '@/Public/img/Img - Like.svg';
// import plus from '@/Public/img/plus.png';
// import search from '@/Public/img/loupe.png';
// import user from '@/Public/img/Img - Profile.svg';
// import userone from '@/Public/img/Img - Profile (2).svg';
// import pin from '@/Public/img/pin (1).png';
// import menu from '@/Public/img/menu (1).png';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import Addpost from '@/app/componnts/addpost/addpost';
// import Modal from '@/app/componnts/modal/modal';
// import Likett from '@/Public/img/Vector (2).svg';

// const Sidebar = () => {
//   const [onopen, setonopen] = useState(false);
//   const [liked, setLiked] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleLogoutClick = () => {
//     // Logic for logout goes here
//     setIsModalOpen(true);
//   };

//   return (
//     <div className="flex flex-col md:flex-row">
//       {/* Desktop Sidebar (Vertical) */}
//       <div className="md:flex md:flex-col md:w-1/5  p-4 md:h-screen block">
//         <nav className="flex flex-col items-start justify-start">
//           <div className="mb-4">
//             <Image src={therad} alt="img" className="w-60" />
//           </div>
//           <div className="flex flex-col space-y-4 items-center mt-56">
//             <Link href="/main">
//               <div className="hover:bg-gray-900 p-2 rounded-xl transition duration-200">
//                 <Image src={home} alt="home" className="w-50" />
//               </div>
//             </Link>

//             <Link href="/main/search">
//               <div className="hover:bg-gray-900 p-2 rounded-xl transition duration-200">
//                 <Image src={search} alt="search" className="w-8" />
//               </div>
//             </Link>

//             <Link href={''} onClick={() => setonopen(true)}>
//               <div className="hover:bg-gray-900 p-2 rounded-xl transition duration-200">
//                 <Image src={plus} alt="plus" className="w-8" />
//               </div>
//             </Link>

//             <Addpost isopen={onopen} onclose={() => setonopen(false)}><h1></h1></Addpost>

//             <Link href="/main/activity">
//               <div className="hover:bg-gray-900 p-2 rounded-xl transition duration-200" onClick={() => setLiked(!liked)}>
//                 <Image src={liked ? Likett : like} alt="like" className="w-8" />
//               </div>
//             </Link>

//             <Link href="/main/profile">
//               <div className="hover:bg-gray-900 p-2 rounded-xl transition duration-200">
//                 <Image src={user} alt="user" className="w-8" />
//               </div>
//             </Link>
//           </div>

//           <div className="flex flex-col space-y-4 items-center mt-48">
//             <div className="hover:bg-gray-900 p-2 rounded-xl transition duration-200 mr-20">
//               <Image src={pin} alt="pin" className="w-10" />
//             </div>

//             <div className="flex items-center relative group cursor-pointer mr-20">
//               <div className="hover:bg-gray-900 p-2 rounded-xl transition duration-200" onClick={handleLogoutClick}>
//                 <Image src={menu} alt="menu" className="w-8" />
//               </div>
//               <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//             </div>
//           </div>
//         </nav>
//       </div>

//       {/* Mobile and Small Screen Navbar (Bottom) */}
//       <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black text-white p-4 flex justify-between items-center">
//         <Link href="/main">
//           <div className="hover:bg-gray-900 p-2 rounded-xl transition duration-200">
//             <Image src={home} alt="home" className="w-8" />
//           </div>
//         </Link>

//         <Link href="/main/search">
//           <div className="hover:bg-gray-900 p-2 rounded-xl transition duration-200">
//             <Image src={search} alt="search" className="w-8" />
//           </div>
//         </Link>

//         <Link href={''} onClick={() => setonopen(true)}>
//           <div className="hover:bg-gray-900 p-2 rounded-xl transition duration-200">
//             <Image src={plus} alt="plus" className="w-8" />
//           </div>
//         </Link>

//         <Link href="/main/activity">
//           <div className="hover:bg-gray-900 p-2 rounded-xl transition duration-200" onClick={() => setLiked(!liked)}>
//             <Image src={liked ? Likett : like} alt="like" className="w-8" />
//           </div>
//         </Link>

//         <Link href="/main/profile">
//           <div className="hover:bg-gray-900 p-2 rounded-xl transition duration-200">
//             <Image src={user} alt="user" className="w-8" />
//           </div>
//         </Link>
//       </div>

//       {/* Mobile Top Bar with Therad Image */}
//       <div className="md:hidden fixed top-0 left-0 right-0 bg-black text-white p-4 flex justify-center items-center">
//         <Image src={therad} alt="Therad Logo" className="w-10" />
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
