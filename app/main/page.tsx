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
import comment from '@/Public/img/Img - Comment.svg'
import repost from '@/Public/img/Img - Repost.svg'
import share from '@/Public/img/Img - Share.svg'
import replies from '../componnts/replies/replies'
import Repost from '@/app/componnts/repost/repost'
import Mainloading from '@/app/componnts/loadinginall/mainload'
import { addNewPost } from '@/store/reducer/postssSlice'
// import { Like }  from '@/Public/img/heart (1).png'



function page() {

  const [likee, setlike] = useState(false)
  const [onopen, setonopen] = useState(false)
  const[selectcmt,setselectcmt]=useState<any>(null)
  const [repostData, setRepostData] = useState<any>(null);  
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [username, setUserName] = useState<string>("");
  const [postContent, setPostContent] = useState<string>("");
  const [postImage, setPostImage] = useState<any>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [userId, setUserId] = useState<string>("");
  const [userProfilePic, setProfilePic] = useState<string>("");

  // const [users, setUser] = useState<any>(null);
  const { users ,user } = useAppSelector((state) => state.userget)
  const { posts,status } = useAppSelector((state) => state.posts)




  const dispatch = useAppDispatch()
  const router = useRouter()

  // console.log(posts)
  useEffect(() => {
    const userIdd = localStorage.getItem("userid");
    if (userIdd && users.length > 0) {
      const user = users.find((user) => user.id === userIdd);
      if (user) {
        setCurrentUser(user);
        setUserName(user.username || "");
      }
    }
  }, [users]);



  useEffect(() => {
    dispatch(fetchPosts())
    dispatch(fetchUser())
   if(posts){
   
   }
  }, [dispatch,posts])


  // useEffect(() => {
  //   if (currentUser) {
  //     setUserId(currentUser._id);
  //     setProfilePic(
  //       currentUser.profilePic ||
  //         "https://cdn-icons-png.flaticon.com/512/149/149071.png"
  //     );
  //   }
  // }, [currentUser]);


  const handli = () => {
    setlike(true)
  }



  const openmodal = (post : any)=>{
    setselectcmt(post)
  
  }

  const opennmodal = (repost:any)=>{
    setRepostData({
      postId: repost._id,
      userProfilePic: repost.postById?.profilePic || "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      username: repost.postById?.username || 'Unknown User',
    })
  }










  // const handlePostChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setPostContent(event.target.value);
  // };

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     setPostImage(file);
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setPreview(reader.result as string);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const handlePostSubmit = async () => {
  //   if (postContent.trim() === "") {
  //     alert("Please write something before posting!");
  //     return;
  //   }
  //   if (!currentUser) {
  //     alert("User not found! Please log in.");
  //     return;
  //   }
  //   const newPost = {
  //     userId: currentUser.id,
  //     text: postContent,
  //     image: postImage,
  //   };

  //   dispatch(addNewPost(newPost));
  //   setPostContent("");
  // };




  console.log('Current User:', currentUser);
  

  const userIdd = localStorage.getItem("userid");




  

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
  {user && (
      <div key={user.id}>
        <p className='flex col'>
          <img
            className='w-10 ml-6 h-10 mt-4 rounded-full object-cover'
            src={user.profilePic || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
            alt=""
          />
          <h1 className='ml-5 mt-6 text-[#545050] sm lg xl md'>What's new?</h1>

          <button
            className='border w-16 h-10 rounded-xl mt-5 mb-2 ml-[360px] border-[#3b3b3b]'
            onClick={() => setonopen(true)}
          >
            Post
          </button>

          <Addpost isopen={onopen} onclose={() => setonopen(false)}>
            <h1></h1>
          </Addpost>
        </p>
      </div>
    )}
   {/* (
  <Mainloading />
) : ( */}
  <>
   

    {posts.map((post) => (
      
      <div key={post._id} className="flex border-[#3b3b3b] border">
        <div className="p-2">
          <img
             
            className="w-10 ml-4 h-10 object-cover rounded-full"
            src={post.postById?.profilePic || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
            alt=""
          />
        </div>
        <div className="flex-1 p-2">
          <div className="flex justify-between items-start">
           
            <p 
         
            className="font-semibold">{post.postById?.username ||'gvb n'}</p>
            <h1 className="text-gray-500 text-lg">...</h1>
          </div>
          <p className="pb-2">{post.text}</p>
          {post.image && <img className="image-main" src={post.image} alt="post" />}
          <div className="flex items-center gap-8">
            <LikeButton
              initialLike={post.likes.length}
              postId={post._id}
              likedUser={post.likes}
            />
            <div
              className="w-[60px] h-[30px] flex justify-center items-center rounded-[20px] gap-1 hover:bg-[rgb(56,52,52)] transition-all duration-500 ease-in  "
              onClick={() => openmodal(post)}
            >
              <Image src={comment} alt="" />
              <span className="text-sm">{post.replies.length}</span>
            </div>
            <div
              className="w-[60px] h-[30px] flex justify-center items-center rounded-[20px] gap-1 hover:bg-[rgb(56,52,52)] transition-all duration-500 ease-in  "
              onClick={() => opennmodal(repost)}
            >
              <Image src={repost} alt="" />
              <span className="text-sm ml-1">{post.reposts.length}</span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
{/* ) */}

  </div>


      </div>
      <div>

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


      </div>
   

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
   

















