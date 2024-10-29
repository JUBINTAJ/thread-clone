'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import therad from  '@/Public/img/threads-logo-w.png'
import home from "@/Public/img/icons8-home-100.png"
import like from '@/Public/img/icons8-like-100 (1).png'
import plus from '@/Public/img/icons8-plus-100 (1).png'
import search  from '@/Public/img/icons8-search-100 (1).png'
import user from '@/Public/img/icons8-user-100.png'
import pin from '@/Public/img/icons8-pin-100.png'
import menu from '@/Public/img/menu.png'
import { useAppDispatch, useAppSelector } from '../hookkkk/Appdispatch'
import { fetchPosts } from '@/store/reducer/postssSlice'
import { fromJSON } from 'postcss'
import Likebutton from '../componnts/likebutton/likebutton'
import { FcLike } from "react-icons/fc";
import Sidebar from '../componnts/sidebar/sidebar'
import Addpost from "@/app/componnts/addpost/addpost"
import { fetchUser } from '@/store/reducer/usergetSlice'



function page() {

  // const [currentuser,setcurrentuser]=useState<any>(false)
  const [likee ,setlike]=useState(false)
  const[onopen ,setonopen]=useState(false)







  const dispatch=useAppDispatch()
  const {posts}=useAppSelector((state)=>state.posts)
  const{user}=useAppSelector((state)=>state.userget)
console.log(posts)




useEffect(()=>{
  dispatch(fetchPosts())
  const userId=localStorage.getItem("userid")
  dispatch(fetchUser(userId))

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
        <p className='  text-center   '>Home</p>

        </div>
      
   
            <div className=" border  border-[#3b3b3b]  w-[630px] h-[865px] border-b-0 mt-14   rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none rounded-br-none scrollb " >
           
           <div >
            {user && (
              <div key={user.id} >
                <img src={user.profilePic || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="" />

              </div>
            )}
            <h1 className='post'>create a new post
          <span> <button className='border w-16 h-10 rounded-xl mb-8 ml-[520px] ' onClick={()=>setonopen(true)}> post
     
        </button> </span>
        <Addpost isopen={onopen} onclose={()=>setonopen(false)} >
      <h1>creat a new post</h1>

     </Addpost></h1>
           </div>
           
     

            {posts.map((post) => (
    <div key={post.id} className='flex border-[#3b3b3b] border ' >
      <div className="p-1"><img className='w-10 ml-6 mt-4 object-cover rounded-full' src={post.postById?.profilePic || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="" /></div>
      <div className="p-2  "> 
        <p className=' pb-4 pt-2 pl-4'>{post.postById?.username}<span> </span></p>
        <p className='pl-5 pb-3'>{post.text}</p>
        {post.image && <img className='h-[435px] w-auto rounded-md  object-cover border border-[#3b3b3b] ' src={post.image} alt='post'/>}
        <div className=''>
 
              <Likebutton 
                 initialike={post.likes.length}
                 postId={post.id}
                //  userId={.id}
                 likeduser={post.likes}
              
              />
           
        

        {/* <FcLike/> */}

         <button onClick={handli}>
         <FcLike  className='w-7 h-10' />


         </button>

          
        </div>
        
      </div>
    
     
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
