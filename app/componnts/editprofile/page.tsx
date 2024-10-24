'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Sidebar from '../sidebar/sidebar'
import { useAppDispatch, useAppSelector } from '@/app/hookkkk/Appdispatch'
import { fetchPosts } from '@/store/reducer/postssSlice'
import { fromJSON } from 'postcss'
import { FcLike } from "react-icons/fc";
import { userupdate } from '@/store/reducer/userSlice'



function page() {

  const [currentuser,setcurrentuser]=useState<any>(false)
  const [likee ,setlike]=useState(false)







  const dispatch=useAppDispatch()
  const {user}=useAppSelector((state)=>state.user)
console.log(user)




useEffect(()=>{
  // dispatch(fetchPosts())
  dispatch(userupdate())

},[])


const handli=()=>{
  setlike(true)
}



  return (

      

      <div className='flex justify-between'>
        <div>
          <Sidebar/>
        </div>
      
       <div className="lay-2 mr-24 ">
        <div className=''>
        <p className='  text-center   '>Profile</p>

        </div>
            <div className=" border border-[#181818] border-[#3b3b3b]  w-[630px] h-[865px] border-b-0 mt-14   rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none rounded-br-none scrollb " >
  {user.map((user)=>(
    <div key={user.id}  className='flex border-[#3b3b3b] border'>
           
    </div>
  ))}
    

       </div>
    
      </div>



      <div className='lay-3'>
        
      </div>




      </div>
     
    
  )
}

export default page
