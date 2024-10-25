'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Sidebar from '../sidebar/sidebar'
import { useAppDispatch, useAppSelector } from '@/app/hookkkk/Appdispatch'
import { fetchPosts } from '@/store/reducer/postssSlice'
import { fromJSON } from 'postcss'
import { FcLike } from "react-icons/fc";
import { fetchUserData, userupdate } from '@/store/reducer/userSlice'



function page() {

  const[name ,setname]=useState<string>('')
  const[profilePic,setprofilepic]=useState<string>('')
  const[username ,setusername]=useState<string>('')







  const dispatch=useAppDispatch()
  const {user}=useAppSelector((state)=>state.user)
console.log(user)




useEffect(()=>{ 
  const userId=localStorage.getItem('userId')
  dispatch(fetchUserData(userId))

},[dispatch])


useEffect(()=>{
  const userId=localStorage.getItem('userId')
  if(userId && user.length >0){
       const users=user.find((user)=>user===userId)
       if(users){
        setname(users.name || "")
        setusername(users.username || "")
        setprofilepic (users.profilePic || "")
       }
  }
},[user]);



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
  
    

       </div>
    
      </div>



      <div className='lay-3'>
        
      </div>




      </div>
     
    
  )
}

export default page


