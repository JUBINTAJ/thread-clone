'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import dot from '@/Public/img/more.png'
import { useAppDispatch, useAppSelector } from '../hookkkk/Appdispatch'
import { fetchPosts } from '@/store/reducer/postssSlice'
import { fromJSON } from 'postcss'
import Likebutton from '../componnts/likebutton/likebutton'
import { FcLike } from "react-icons/fc";
import Sidebar from '../componnts/sidebar/sidebar'
import Addpost from "@/app/componnts/addpost/addpost"
import { fetchUser } from '@/store/reducer/usergetSlice'
import { useRouter } from 'next/navigation'
import like from '@/Public/img/icons8-like-100 (1).png'
import comment from '@/Public/img/chat (1).png'
import repost from '@/Public/img/repeat.png'
import share from '@/Public/img/send.png'
import { RiGitRepositoryCommitsFill } from 'react-icons/ri'
// import { Like }  from '@/Public/img/heart (1).png'



function page() {

  const [likee, setlike] = useState(false)
  const [onopen, setonopen] = useState(false)
  const [users, setUser] = useState<any>([]);

  const dispatch = useAppDispatch()
  const router = useRouter()
  const { posts } = useAppSelector((state) => state.posts)
  const { user } = useAppSelector((state) => state.userget)

  // console.log(posts)

  // useEffect(() => {
  //   const userId = localStorage.getItem('userid');
  //   if (userId && users.length > 0) {
  //       const foundUser = users.find((user) => user.id === userId);
  //       setUser(foundUser);
  //   }
  // }, [users]);


  useEffect(() => {
    dispatch(fetchPosts())

    dispatch(fetchUser())

  }, [dispatch])


  const handli = () => {
    setlike(true)
  }



  return (



    <div className='  flex justify-between'>
      <div>
        <Sidebar />
      </div>

      <div className="lay-2 mr-24 ">
        <div className=''>

        </div>
        <p className='  text-center pt-8 prata-regular '>For you</p>


        <div className="  bg-[#5654543b] w-[630px] h-[865px] mt-3 border-b-0 border border-[#3b3b3b]   rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none rounded-br-none scrollb " >

          <div >
            {user && (
              <div key={user.id} >
                <p className='flex col'> <img className='w-10 ml-6 h-10 mt-4 rounded-full object-cover ' src={user.profilePic || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="" />
                  <h1 className='ml-5 mt-6 text-[#545050]'>What's new?</h1>

                  <button className=' border w-16 h-10 rounded-xl mt-5 mb-2  ml-[360px] border-[#3b3b3b]  ' onClick={() => setonopen(true)}> post </button>

                  <Addpost isopen={onopen} onclose={() => setonopen(false)} >
                    <h1></h1>

                  </Addpost>
                </p>

              </div>

            )}


          </div>

          {posts.map((post) => {
            return (
              <div key={post._id} className="flex border-[#3b3b3b] border ">
                <div className="p-2">
                  <img className="w-10 ml-5 h-10 object-cover rounded-full" src={post.postById?.profilePic || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="" />
                </div>
                <div className="flex-1 p-2">


                  <div className="flex justify-between items-start ">

                    <p className="font-semibold">{post.postById?.username}</p>

                    <h1 className="text-gray-500 text-lg">...</h1>
                  </div>
                  <p className=" pb-2">{post.text}</p>
                  {post.image && <img className="h-[435px]  rounded-md mb-4  " src={post.image} alt="post" />}
                  <div className="flex items-center gap-8 ">
                    {/* <button onClick={handli} className="flex items-center">
                        <Image src={like} alt='' className="w-7 h-7"   />
                        {post.likes.length}
                    </button> */}
                    <Likebutton initialLike={post.likes.length} postId={post._id} likedUser={post.likes} />
                    <div className=''>
                      <Image src={comment} alt='' className='hover hover:bg-gray-900 ' />
                    </div>
                    <div className=''>
                      <Image src={repost} alt='' className='hover hover:bg-gray-900 w-5' />
                    </div>
                    <div className=''>
                      <Image src={share} alt='' className='hover hover:bg-gray-900 w-5' />
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      </div>
      <div>
      </div>
    </div>


  )
}

export default page
