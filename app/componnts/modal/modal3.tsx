import axiosInstance from '@/app/axios/axiosinstance';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';


export default function Modal({ isOpen, onClose, postId }: { isOpen: boolean; onClose: () => void; postId: string }) {
  const router = useRouter();

 
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50   bg-opacity-60" onClick={onClose}>
      <div className="bg-[#2C2C2C] text-white rounded-2xl p-6 w-64 shadow-lg relative top-[500px] left-[1320px]">
        <div className="flex justify-end mb-4">
        </div>

        <ul className="space-y-4">
          <li className="cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-lg">For you</li>
          <li className="cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-lg">Following</li>
          <li className="cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-lg">Liked</li>
          <li className="cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-lg">Saved</li>       

          <div className="w-full h-px bg-[#3b3b3b] my-2"></div>

          <li className="cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-lg">Create new feed</li>
        </ul>
      </div>
    </div>
  );
}
