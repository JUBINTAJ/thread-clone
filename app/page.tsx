'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Sidebar from '@/app/componnts/sidebar/sidebar'
import { useAppDispatch, useAppSelector } from './hookkkk/Appdispatch'
import { fetchPosts } from '@/store/reducer/postssSlice'


function page() {



const dispatch=useAppDispatch()
const {posts}=useAppSelector((state)=>state.posts)

{console.log(posts)}



useEffect(()=>{

dispatch(fetchPosts())

},[])


  return (
    <div className='flex justify-between'>
     
<div>
  <Sidebar/>
</div>

 <div className='lay-5'>
  <div className='lay-6  border  border-[#3b3b3b]  w-[630px] h-[865px] border-b-0 mt-14   rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none rounded-br-none scrollb '>
    {  posts.map((post)=>(
      <div key={post._id} className='flex border-[#3b3b3b] border ' >
        <div><img  className='w-10 h-10 object-cover ml-6 mt-4 rounded-full' src={post.postById?.profilePic  || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}  alt="" /> </div>
        <div>
        <p className=' pb-4 pt-2 pl-4'>  {post.postById?.username}  <span> </span></p>
        <p  className='pl-5 pb-3'>{post.text}</p>
  {post.image && <img className='h-[435px] w-auto rounded-md  object-cover border border-[#3b3b3b] ' src={post.image} />}


        </div>




      </div>
    ))}


  </div>

 </div>








   

<div>


      <Link href='/login'>
            <button className='bg-white text-black border rounded-md w-20 h-8 mt-7 mr-5 justify-center'>
              Log in
            </button>
          </Link>

          </div>

    </div> 
  )
}

export default page
