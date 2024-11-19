
'use client'
import React, { useState } from 'react'
import therad from '@/Public/img/threads-logo-w.png'
import home from "@/Public/img/home (3).png"
import like from '@/Public/img/Img - Like.svg'
import plus from '@/Public/img/plus.png'
import search from '@/Public/img/loupe.png'
import user from '@/Public/img/user (1).png'
import pin from '@/Public/img/pin (1).png'
import menu from '@/Public/img/menu (1).png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Addpost from '@/app/componnts/addpost/addpost'
import Modal from '@/app/componnts/modal/modal'


function sidebar() {

  const [onopen, setonopen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const router = useRouter()

  const logout = (() => {
    localStorage.clear()
    router.push('/login')

  })
  return (
    <div>


      <div className="lay-1">
        <nav className='p-4 w-full '>
          <div className='flex flex-col items-start justify-start'>
            <div className='mb-4'>
              <Image
                src={therad}
                alt='img'
                className='w-10'
              />
            </div>

            <div className='flex flex-col space-y-4 items-center mt-56  ' >
              <Link href={'/main'}>

                <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200'>
                  <Image src={home} alt='home' className='w-8' />
                </div>
              </Link>

              <Link href={'/main/search'}>
                <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200'>
                  <Image src={search} alt='search' className='w-8' />
                </div>
              </Link>



              <Link href={''} onClick={() => setonopen(true)}>

                <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200 '>
                  <Image src={plus} alt='plus' className='w-8' />
                </div>
              </Link>
              <Addpost isopen={onopen} onclose={() => setonopen(false)} >
                <h1></h1>
              </Addpost>










              <Link href={"/main/activity"}>

              <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200'>
                <Image src={like} alt='like' className='w-8' />
              </div>
              </Link>


              <Link href={"/main/profile"}>


                <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200'>
                  <Image src={user} alt='user' className='w-8' />
                </div>

              </Link>

            </div>








            <div className='flex flex-col space-y-4 items-center mt-48'>

              <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200 mr-20'>
                <Image src={pin} alt='user' className='w-10' />
              </div>



              <div className="flex items-center relative group cursor-pointer mr-20" >
                <div className="hover:bg-gray-900 p-2 rounded-xl transition duration-200" onClick={handleLogoutClick}>
                  <Image src={menu} alt="user" className="w-8" />
                </div>
               

                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

              </div>


            </div>


          </div>



        </nav>
      </div>
    </div>
  )
}

export default sidebar


