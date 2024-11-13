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
    <div>
      <button onClick={onclose}>cancel</button>
            <div >
                
                <div >
                   
                    <button  onClick={handle}  >
                       Repost
                    </button>
                </div>
            </div>
        </div>  )
}
export default repost