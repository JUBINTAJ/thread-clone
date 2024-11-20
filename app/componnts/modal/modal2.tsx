import axiosInstance from '@/app/axios/axiosinstance';
import { useRouter } from 'next/navigation';

export default function Modal({ isOpen, onClose ,postId }) {
    if (!isOpen) return null; 


    const router = useRouter()

    const deletepost = async (postId: string) => {
        try {
          await axiosInstance.delete(`posts/${postId}`);
          
        } catch (error) {
          console.log('error in delete post', error);
        }
      };
 
    return (
      <div className="fixed inset-2    mr-24 z-0 flex place-items-end justify-end ">
      <div className="ml-6 mb-5">
        <div className="bg-[#2C2C2C] text-white rounded-2xl p-6 w-64">
          <button onClick={onClose} className="justify-center items-center">...</button>
          <ul className="space-y-4">
            <li className="cursor-pointer hover:bg-gray-700 px-2 py-1 h-10 w-[225px] mr-7 rounded-sm">Save</li>
            <li className="cursor-pointer hover:bg-gray-700 px-2 py-1 h-10 w-[225px] rounded-2xl">Hide like and share counts</li>
            <li className="cursor-pointer hover:bg-gray-700 px-2 py-1 h-10 w-[225px] rounded-2xl">Who can reply & quote</li>
            <div className="w-[230px] h-px bg-[#3b3b3b] mt-2 mr-12"></div>
            <li
              className="cursor-pointer hover:bg-gray-700 px-2 py-1 h-10 w-[225px] rounded-2xl text-red-500"
              onClick={()=>deletepost(postId)}
            >
              Delete
            </li>            <div className="w-[230px] h-px bg-[#3b3b3b] mt-2 mr-12"></div>

            <li className="cursor-pointer hover:bg-gray-700 px-2 py-1 h-10 w-[225px] rounded-2xl">Copy link</li>
         
          </ul>
        </div>
      </div>
    </div>
    
    
    );
  }
  