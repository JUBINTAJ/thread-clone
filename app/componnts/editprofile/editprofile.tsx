// 'use client';

// import axiosInstance from '@/app/axios/axiosinstance';
// import { useAppDispatch, useAppSelector } from '@/app/hookkkk/Appdispatch';
// import { fetchUser } from '@/store/reducer/usergetSlice';
// import React, { ReactNode, useEffect, useState } from 'react';
// import Loading from '@/app/componnts/loading/loading';
// import draft from '@/Public/img/draft.png';
// import Image from 'next/image';

// interface EditProfileModalProps {
//     isopen: boolean;
//     onclose: () => void;
//     children: ReactNode;
// }

// const EditProfileModal: React.FC<EditProfileModalProps> = ({ isopen, onclose, children }) => {
    
 
        
       
       

//     if (!isopen) return null;

//     return (
//         <div className="fixed inset-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-[1000]">
//             <div className="bg-[#2C2C2C] p-6 md:p-8 w-[550px] ml-14 rounded-lg shadow-lg relative animate-fadeIn border border-[#444]">
//                 <div className='flex justify-between items-center mb-4'>
//                     <button onClick={onclose} className="text-gray-400 hover:text-white transition">Cancel</button>
//                     <p className="text-center text-white font-semibold text-lg">Edit Profile</p>
//                     <div className="w-16">
//                         <Image src={draft} alt='Draft Icon' className='w-8 h-8' />
//                     </div>
//                 </div>
//                 <div className="w-full h-px bg-[#444] mb-4"></div>
//                 <div>
                     
//                         <div className="flex items-center mb-4">
//                             <img className='w-10 h-10 rounded-full border-2 border-black' src={  'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="Profile" />
//                         </div>
                    
//                     <div className="text-gray-200">
//                         {children}
//                         <div className="flex flex-col gap-4 mt-4">
//                             <input
//                                 type="text"
//                                 placeholder="Full Name"
//                                 className="bg-[#2C2C2C] border border-[#444] outline-none w-full p-3 rounded-md text-white focus:ring-2 focus:ring-blue-500 transition"
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Username"
//                                 className="bg-[#2C2C2C] border border-[#444] outline-none w-full p-3 rounded-md text-white focus:ring-2 focus:ring-blue-500 transition"
//                             />
//                             <textarea
//                                 placeholder="Bio"
//                                 className="bg-[#2C2C2C] border border-[#444] outline-none w-full resize-none p-3 rounded-md text-white focus:ring-2 focus:ring-blue-500 transition"
//                                 rows={4}
//                             />
//                                 <div className="w-full max-h-[300px] overflow-hidden rounded-md">
//                                     <img src={} alt="Preview" className="w-full h-auto object-cover rounded-md" />
//                                 </div>
//                             <div className="relative">
//                                 <input
//                                     type="file"
//                                     accept="image/*"
//                                     className="absolute inset-0 opacity-0 cursor-pointer"
//                                 />
//                                 <label className="flex items-center text-gray-300 cursor-pointer hover:text-white">
//                                     <button className="ml-2 mt-5 border border-black text-white-500 hover:text-white transition h-10 w-40 rounded-lg">Upload Image</button>
//                                 </label>
//                             </div>
//                         </div>
//                         <div className="mt-3 flex justify-end">
//                             <button   className="bg-black text-white rounded-lg px-4 py-2 transition">
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default EditProfileModal;
