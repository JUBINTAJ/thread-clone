
'use client'
import React from 'react'
import therad from  '@/Public/img/threads-logo-w.png'
import home from "@/Public/img/home (2).png"
import like from '@/Public/img/heart (1).png'
import plus from '@/Public/img/icons8-plus-100 (1).png'
import search  from '@/Public/img/icons8-search-100 (1).png'
import user from '@/Public/img/user.png'
import pin from '@/Public/img/pin.png'
import menu from '@/Public/img/menu.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


function sidebar() {

  const router=useRouter()

  const logout=(()=>{
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

    <Link href={'/search'}>
    <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200'>
      <Image src={search} alt='search' className='w-8' />
    </div>
    </Link>
    
  
    <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200 '>
      <Image src={plus} alt='plus' className='w-8' />
    </div>
   
    <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200'>
      <Image src={like} alt='like' className='w-8' />
    </div>


    <Link href={"/componnts/profile"}>

    
    <div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200'>
      <Image src={user} alt='user' className='w-8' />
    </div>
    
    </Link>

  </div>








<div  className='flex flex-col space-y-4 items-center mt-48'>

<div className='hover:bg-gray-900 p-2 rounded-xl transition duration-200 mr-12'>
      <Image src={pin} alt='user' className='w-6' />
    </div>



    <div className="flex items-center relative group cursor-pointer" onClick={logout}>
      <div className="hover:bg-gray-900 p-2 rounded-xl transition duration-200">
        <Image src={menu} alt="user" className="w-8" />
      </div>
      <p className="ml-4 mb-8 text-blue opacity-0 transition-opacity duration-200 group-hover:opacity-100 prata-regular">
        Logout
      </p>
    </div>


</div>
 

</div>



</nav>
</div>
    </div>
  )
}

export default sidebar