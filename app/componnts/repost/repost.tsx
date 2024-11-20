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
 
  // const userusernsme=username || 
  const Repost ={
    userId :userId,
    userprofilpic :userprofilpic,
    username :username

  }
  console.log('user',username)

  try{
    const res=await axiosInstance.post(`posts/repost/${postId}`, Repost)
    postId='';

dispatch(fetchPosts())
onclose()
  }catch(error){
    console.error('errorr',error)
  }
}




if(!isopen) return null

  return (
    <div className="fixed inset-0   flex justify-center items-center  z-50">
      <div className="bg-[#5654543b] rounded-lg shadow-lg w-96 p-6 flex flex-col">
        <div className="flex justify-between items-center border-b pb-3">
          <button onClick={onclose} className="text-gray-500 hover:text-gray-800">cancel</button>
        </div>

       

        <div className="">
         
          <button 
            onClick={handle} 
            className="w-full py-2 rounded-lg  text-white border-gray-400 border "
          >
            Repost
          </button>
        </div>
      </div>
    </div>  )
}
export default repost   






// import axiosInstance from '@/app/axios/axiosinstance';
// import React from 'react';
// import { fetchPosts } from '@/store/reducer/postssSlice';
// import { useAppDispatch } from '@/app/hookkkk/Appdispatch';

// interface RepostProps {
//   isopen: boolean;
//   onclose: () => void;
//   postId: string;
//   userprofilpic: string;
//   username: string;
// }

// const Repost: React.FC<RepostProps> = (props) => {
//   const {
//     isopen = false, // Default value if it's not provided
//     onclose = () => {}, // Default empty function if not provided
//     postId = '', // Default empty string if not provided
//     userprofilpic = '', // Default empty string if not provided
//     username = '', // Default empty string if not provided
//   } = props || {}; // Fallback to an empty object if props are null or undefined

//   const dispatch = useAppDispatch();

//   // Additional validation to check if required props are available
//   if (!props || !onclose || !postId || !userprofilpic || !username) {
//     return (
//       <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
//         <div className="bg-red-500 text-white rounded-lg shadow-lg w-96 p-6 flex flex-col">
//           <h2 className="text-xl font-semibold">Error</h2>
//           <p>Required data is missing or incomplete.</p>
//           <button onClick={onclose} className="mt-4 py-2 px-4 bg-black text-white rounded">
//             Close
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const handle = async () => {
//     const userId = localStorage.getItem('userid');
//     if (!userId) {
//       console.error('User ID not found in localStorage');
//       return;
//     }

//     const repostData = {
//       userId: userId,
//       userprofilpic: userprofilpic,
//       username: username,
//     };
//     console.log('user', username);

//     try {
//       await axiosInstance.post(`posts/repost/${postId}`, repostData);
//       dispatch(fetchPosts());
//       onclose();
//     } catch (error) {
//       console.error('Error during repost:', error);
//     }
//   };

//   if (!isopen) return null;

//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-black rounded-lg shadow-lg w-96 p-6 flex flex-col">
//         <div className="flex justify-between items-center border-b pb-3">
//           <h2 className="text-xl font-semibold text-white">Repost</h2>
//           <button onClick={onclose} className="text-gray-500 hover:text-gray-800">Cancel</button>
//         </div>
//         <div className="mt-6 flex justify-between gap-4">
//           <button
//             onClick={handle}
//             className="w-full py-2 rounded-lg bg-black text-white border-gray-400 border"
//           >
//             Repost
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Repost;
