import axiosInstance from '@/app/axios/axiosinstance';
import { useAppDispatch } from '@/app/hookkkk/Appdispatch';
import React from 'react'
import { fetchPosts } from '@/store/reducer/postssSlice';

interface Repost {
  isopen:boolean;
  onclose:()=>void
  postId:string;
  userprofilpic:string;
  username:string;
}

 const repost :React.FC<Repost> =({isopen,onclose,postId,userprofilpic,username}) => {
const dispatch=useAppDispatch()


const handle = async()=>{
  const userId=localStorage.getItem('userid')

   const Repost = {
    userId :userId,
    userprofilpic :userprofilpic,
    username :username
  }
  try{
    await axiosInstance.post(`posts/repost/${postId}`, Repost)
    postId='';

   dispatch(fetchPosts())
   onclose()
  }catch(error){
    console.error('errorr',error)
  }
}




if(!isopen) return null

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50" onClick={onclose}>
    <div className="bg-[#181818] rounded-xl shadow-lg w-[300px] h-[100px] flex flex-col border border-[#3b3b3b]">  
      <div className="flex flex-col space-y-3 p-1 justify-start items-start">
        <button
          onClick={handle}
          className="w-full py-2 rounded-lg  text-white "
        >
        Repost
        </button>
        <button
          className="w-full py-2 rounded-lg  text-white "
        >
          Quote
        </button>
      </div>
    </div>
  </div>
  
    )
}
export default repost   






