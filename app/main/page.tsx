import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import therad from  '@/Public/img/threads-logo-w.png'
import home from "@/Public/img/icons8-home-100.png"
import like from '@/Public/img/icons8-like-100 (1).png'
import plus from '@/Public/img/icons8-plus-100 (1).png'
import search  from '@/Public/img/icons8-search-100 (1).png'
import user from '@/Public/img/icons8-user-100.png'
import pin from '@/Public/img/icons8-pin-100.png'
import menu from '@/Public/img/menu.png'

function page() {
  return (
    <div className='flex'>
      <nav className='p-7 w-full '>
        <div className='flex flex-col items-start justify-start'>
          <div className='mb-4'>
            <Image 
              src={therad}
              alt='img'
              className='w-10'
            />
          </div>

          <div className='flex flex-col space-y-4 items-center mt-56'>
            <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200'>
              <Image src={home} alt='home' className='w-8' />
            </div>
            <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200'>
              <Image src={like} alt='like' className='w-8' />
            </div>
            <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200'>
              <Image src={plus} alt='plus' className='w-8' />
            </div>
            <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200'>
              <Image src={search} alt='search' className='w-8' />
            </div>
            <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200'>
              <Image src={user} alt='user' className='w-8' />
            </div>
          </div>

       <div  className='flex flex-col space-y-4 items-center mt-48'>

       <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200'>
              <Image src={pin} alt='user' className='w-6' />
            </div>
       <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200'>
              <Image src={menu} alt='user' className='w-8' />
            </div>
       </div>
         

        </div>
      </nav>
      {/* <Link href='/login'>
            <button className='bg-white text-black border rounded-md w-20 h-8 mt-7 mr-5 justify-center'>
              Log in
            </button>
          </Link> */}
    </div> 
  )
}

export default page
