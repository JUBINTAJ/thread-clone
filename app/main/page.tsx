'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../hookkkk/Appdispatch'
import { fetchPosts } from '@/store/reducer/postssSlice'
import { fromJSON } from 'postcss'
import Likebutton from '../componnts/likebutton/likebutton'
import { FcLike } from "react-icons/fc";
import Sidebar from '../componnts/sidebar/sidebar'
import Addpost from "@/app/componnts/addpost/addpost"
import { fetchUser } from '@/store/reducer/usergetSlice'
import { useRouter } from 'next/navigation'
// import { Like }  from '@/Public/img/heart (1).png'



function page() {

  const [likee ,setlike]=useState(false)
  const[onopen ,setonopen]=useState(false)

  const [users, setUser] = useState<any>([]);






  const dispatch=useAppDispatch()
  const router=useRouter()
  const {posts}=useAppSelector((state)=>state.posts)
  const{user}=useAppSelector((state)=>state.userget)
  
console.log(posts)

// useEffect(() => {
//   const userId = localStorage.getItem('userid');
//   if (userId && users.length > 0) {
//       const foundUser = users.find((user) => user.id === userId);
//       setUser(foundUser);
//   }
// }, [users]);


useEffect(()=>{
  dispatch(fetchPosts())
  const userId=localStorage.getItem("userid")
  dispatch(fetchUser(userId))

},[dispatch])


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

        </div>
        <p className='  text-center pt-8  '>Home</p>

   
            <div className="  bg-[#2d2d2d] w-[630px] h-[865px] border-b-0 mt-5   rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none rounded-br-none scrollb " >
           
           <div >
            {user && (
              <div key={user.id} >
                <img className='w-10 ml-6 h-10 mt-4 rounded-full object-cover ' src={user.profilePic || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="" />

              </div>
              
            )}
                <h1 className='ml-8 mt-9'>create a new post</h1>

          <span> <button className='border w-16 h-10 rounded-xl mb-8 ml-[520px]  ' onClick={()=>setonopen(true)}> post
     
        </button> </span>
        <Addpost isopen={onopen} onclose={()=>setonopen(false)} >
      <h1>creat a new post</h1>

     </Addpost>
           </div>

           
     

            {posts.map((post) => {
              return (
                <div key={post.id} className='flex border-[#3b3b3b] border '>

                  <div className="p-1"><img className='w-10 ml-6 mt-4 h-10 object-cover rounded-full' src={post.postById?.profilePic || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="" /></div>
                  <div className="p-2  ">
                    <p className=' pb-4 pt-2 pl-4'>{post.postById?.username}<span className='ml-[450px] mb-5 '>... </span> </p>

                    <p className='pl-5 pb-3'>{post.text}</p>

                    {post.image && <img className='h-[435px] w-auto   rounded-lg  object-cover  pr-6 ' src={post.image} alt='post' />}
                    <div className=''>

                      {/* <Likebutton
               initialike={post.likes.length}
               postId={post.id}
               userId={.id}
               likeduser={post.likes}
            
            /> */}



                      {/* <FcLike/> */}

                      <button onClick={handli}>
                        {/* <Like className='w-7 h-10' /> */}
                        <FcLike  className='w-7 h-10'  />


                      </button>


                    </div>

                  </div>


                </div>

              )
            })}

       </div>
    
      </div>



     <div>

     </div>




      </div>
     
    
  )
}

export default page
