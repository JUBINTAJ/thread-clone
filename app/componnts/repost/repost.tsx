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
  const Repost ={
    userId :userId,
    userprofilpic :userprofilpic,
    username :username

  }

  try{
    const res=await axiosInstance.post(`posts/repost/${postId}`, repost)
    postId='';

dispatch(fetchPosts())
onclose()
  }catch(error){
    console.error('errorr',error)
  }
}




if(!isopen) return null

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-black rounded-lg shadow-lg w-96 p-6 flex flex-col">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-xl font-semibold text-white">Repost</h2>
          <button onClick={onclose} className="text-gray-500 hover:text-gray-800">cancel</button>
        </div>

       

        <div className="mt-6 flex justify-between gap-4">
         
          <button 
            onClick={handle} 
            className="w-full py-2 rounded-lg bg-black text-white border-gray-400 border "
          >
            Repost
          </button>
        </div>
      </div>
    </div>  )
}
export default repost