'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import dot from '@/Public/img/more.png'
import { useAppDispatch, useAppSelector } from '../hookkkk/Appdispatch'
import { fetchPosts } from '@/store/reducer/postssSlice'
import { fromJSON } from 'postcss'
import LikeButton from "@/app/componnts/likebutton/likebutton"
import Comment from '@/app/componnts/comment/comment'
import { FcLike } from "react-icons/fc";
import Sidebar from '../componnts/sidebar/sidebar'
import Addpost from "@/app/componnts/addpost/addpost"
import { fetchUser } from '@/store/reducer/usergetSlice'
import { useRouter } from 'next/navigation'
import like from '@/Public/img/icons8-like-100 (1).png'
import comment from '@/Public/img/chat (1).png'
import repost from '@/Public/img/repeat.png'
import share from '@/Public/img/send.png'
import replies from '../componnts/replies/replies'
import Repost from '@/app/componnts/repost/repost'
// import { Like }  from '@/Public/img/heart (1).png'



function page() {

  const [likee, setlike] = useState(false)
  const [onopen, setonopen] = useState(false)
  const[selectcmt,setselectcmt]=useState<any>(null)
  const [repostData, setRepostData] = useState<any>(null);  

  const [users, setUser] = useState<any>(null);
  const { user } = useAppSelector((state) => state.userget)




  const dispatch = useAppDispatch()
  const router = useRouter()
  const { posts } = useAppSelector((state) => state.posts)

  // console.log(posts)
  const userId = localStorage.getItem('userid');
  if (userId && Array.isArray(users) && users.length > 0) {
    const foundUser = users.find((users) => users._id === userId);
    setUser(foundUser); 
  }
  



  useEffect(() => {
    dispatch(fetchPosts())

    dispatch(fetchUser())

  }, [dispatch])


  const handli = () => {
    setlike(true)
  }



  const openmodal = (post : any)=>{
    setselectcmt(post)
    setRepostData({
      postId: post._id,
      userProfilePic: post.postById?.profilePic || "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      username: post.postById?.username || 'Unknown User',
    })
  }

  console.log(posts[0])
  console.log(posts[2])

  return (



    <div className='  flex justify-between'>
      <div>
        <Sidebar />
      </div>

      <div className="lay-2 mr-24 ">
        <div className=''>

        </div>
        <p className='  text-center pt-8 prata-regular '>For you</p>

        <div className="bg-[#5654543b] w-full md:w-[630px] h-auto md:h-[865px] mt-3 border-b-0 border border-[#3b3b3b] rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none rounded-br-none scrollb">


          <div >
            {user && (
              <div key={user.id} >
                <p className='flex col'> <img className='w-10 ml-6 h-10 mt-4 rounded-full object-cover ' src={user.profilePic || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="" />
                  <h1 className='ml-5 mt-6 text-[#545050]  sm lg xl md'>What's new?</h1>

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
                <div className="p-2" >
                  <img className="w-10 ml-4 h-10 object-cover rounded-full" src={post.postById?.profilePic || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="" />
                </div>
                <div className="flex-1 p-2">


                  <div className="flex justify-between items-start ">

             <p className="font-semibold">{ post.postById?.username || 'Unknown User'}</p>

                    <h1 className="text-gray-500 text-lg">...</h1>
                  </div>
                  <p className=" pb-2">{post.text}</p>
                  {post.image && <img className="image-main" src={post.image} alt="post" />}
                  <div className="flex items-center gap-8 ">
                 
                    <LikeButton initialLike={post.likes.length} postId={post._id} likedUser={post.likes} />
                    <div className='flex items-center'>
                      <Image src={comment} alt='' className='hover hover:bg-gray-900 ' onClick={()=>openmodal(post)} />
                        <span className="text-sm ">{post.replies.length}</span>
                    </div>
                    <div className='flex items-center'>
                      <Image src={repost} alt='' className='hover hover:bg-gray-900 w-5' onClick={()=>openmodal(repostData)} />
                      <span className="text-sm ml-1">{post.reposts.length}</span>

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
      {selectcmt && (
        <Comment  
        isopen={!!selectcmt}
        onclose={()=>setselectcmt(null)}
        postId={selectcmt._id}
        userId={userId || ""}
        userprofilpic={user?.profilePic || "https://cdn-icons-png.flaticon.com/512/149/149071.png" }
        username={user?.username || 'Anonymous'}


        />
      )}

{repostData && (
        <Repost 
        isopen={!!repostData}
        onclose={()=>setRepostData(null)}
        postId={repostData._id}
        userprofilpic={repostData.userProfilePic}
        username={repostData.username }


        />
      )}
    </div>


  )
}

export default page
   

















