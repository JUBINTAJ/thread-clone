import axiosInstance from '@/app/axios/axiosinstance';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

type Post = {
  _id: string;
  userProfilePic: string;
  username: string;
  text: string;
  image: string;
  createdOn: string;
  replies: Reply[];
  likes: string[];
  reposts: string[];
};

type Reply = {
  _id: string;
  userId: string;
  userProfilePic: string;
  username: string;
  text: string;
};

export default function Modal({ isOpen, onClose, postId }: { isOpen: boolean; onClose: () => void; postId: string }) {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);

  const deletePost = async (postId: string) => {
    try {
      await axiosInstance.delete(`/posts/${postId}`);
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
      onClose();
      router.refresh(); 
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50   bg-opacity-60" onClick={onClose}>
      <div className="bg-[#2C2C2C] text-white rounded-2xl p-6 w-64 shadow-lg relative top-[500px] left-[1320px]">
        <div className="flex justify-end mb-4">
          {/* <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl"></button> */}
        </div>

        <ul className="space-y-4">
          <li className="cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-lg">Save</li>
          <li className="cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-lg">Hide like and share counts</li>
          <li className="cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-lg">Who can reply & quote</li>

          <div className="w-full h-px bg-[#3b3b3b] my-2"></div>

          <li
            className="cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-lg text-red-500"
            onClick={() => deletePost(postId)}
          >
            Delete
          </li>

          <div className="w-full h-px bg-[#3b3b3b] my-2"></div>

          <li className="cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-lg">Copy link</li>
        </ul>
      </div>
    </div>
  );
}
