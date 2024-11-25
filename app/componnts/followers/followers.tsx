'use client';
import React, { useEffect, useState } from 'react';
import axiosInstance from '@/app/axios/axiosinstance';

interface Follow {
  isOpen: boolean;
  onClose: () => void;
}

interface Follower {
  _id: string;
  username: string;
  name?: string; 
  email: string;
  profilePic?: string; 
}

const Modal: React.FC<Follow> = ({ isOpen, onClose }) => {

  const [followers, setFollowers] = useState<Follower[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFollowers = async () => {
      const userId = localStorage.getItem('userid');
      if (!userId) {
        setError('User ID not found ');
        setLoading(false);
        return;
      }
      try {
        const response = await axiosInstance.get(`users/followers/${userId}`);
        setFollowers(response.data.user.followers); 
        setLoading(false);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to fetch followers');
        setLoading(false);
      }
    };

    if (isOpen) fetchFollowers();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
<div className="fixed inset-0 w-full h-full bg-opacity-70 flex justify-center items-start z-[1000] mt-10">
  <div className="bg-[#2C2C2C] p-6 md:p-8 w-[550px] h-auto pb-4 rounded-2xl shadow-lg relative animate-fadeIn border border-[#3b3b3b] scrollb">
    <div className="flex justify-between items-center mb-4">
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-white transition"
      >
        &times;
      </button>
      <p className="text-center text-white font-semibold text-lg ">
        Followers
      </p>
      <div></div> 
    </div>
    
    <div className="w-full h-px bg-[#444] mb-4"></div>

    {loading ? (
      <p className="text-gray-400 text-center">Loading...</p>
    ) : error ? (
      <p className="text-red-500 text-center">{error}</p>
    ) : followers.length > 0 ? (
      followers.map((follower, index) => (
        <div key={follower._id}>
          <div className="flex items-center justify-between gap-4 p-1 mb-4">
            <div className="flex items-center gap-4">
              <img
                src={follower.profilePic || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-white font-medium">
                  {follower.name || follower.username}
                </p>
                <p className="text-gray-400 text-sm">{follower.username}</p>
              </div>
            </div>
            {/* <button className="border border-[#3b3b3b] text-white hover:text-white  transition rounded-xl px-3 py-1">
              Follow back
            </button> */}
          </div>
          
            <div className="w-full h-px bg-[#3b3b3b] "></div>
        </div>
      ))
    ) : (
      <p className="text-gray-400 text-center">No followers ...</p>
    )}
  </div>
</div>

  
  );
};

export default Modal;
