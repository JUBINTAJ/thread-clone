'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '@/app/hookkkk/Appdispatch';
import axiosInstance from '@/app/axios/axiosinstance';

interface Follow {
  isOpen: boolean;
  onClose: () => void;
}
// interface User {
//    _id: string;
//     username: string ;
//     followers:[];
//     email: string;
//     profilePic: string;
// }

interface Followers {
    Id: string;
    // user:User[];
    username: string;
    profilpic?: string;
    name?: string;
    email:string
  }
  

const Modal: React.FC<Follow> = ({ isOpen, onClose }) => {

    const [follower ,setfollowers]=useState<Followers[]>([])

    console.log('kkkkk',follower)
useEffect(()=>{
    
  const fetchFollowers =  async () => {
    const userId = localStorage.getItem("userid");
          try {
            const response = await axiosInstance.get(`users/followers/${userId}`);
            setfollowers(response.data.user.followers)
            console.log( "hit" ,response.data.user);
            return response.data;
          } catch (error: any) {
            console.log(error)
          }
        }
        fetchFollowers()
      
},[])

  if (!isOpen) return null;

//   const { followers } = useAppSelector((state) => state.follow);
//   console.log('heloooo',followers)
  const router = useRouter();

  return (
    <div className="fixed inset-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-start z-[1000] mt-10">
      <div className="bg-[#2C2C2C] p-6 md:p-8 w-[550px] h-[865px] ml-14 rounded-2xl shadow-lg relative animate-fadeIn border border-[#3b3b3b] scrollb">
        <div className="flex items-start">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition items-start"
          >
            Cancel
          </button>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-center text-white font-semibold text-lg">
              Followers
            </p>
          </div>
        </div>
        <div className="w-full h-px bg-[#444] mb-4"></div>

        {/* Map through the followers and render their details */}
         {follower.length > 0 ? (
          follower.map((follower) => (
            <div
              key={follower.Id}
              className="flex items-center gap-4 bg-gray-800 p-3 rounded-lg mb-2"
            >
              <img
                src={follower.profilpic || 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }
                alt=''
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-white font-medium">{follower.name}</p>
                <p className="text-gray-400 text-sm">{follower.username}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center">No followers found.</p>
        )}
      </div> 
    </div>
  );
};

export default Modal;





// 'use client';
// import React, { useEffect, useState } from 'react';
// import axiosInstance from '@/app/axios/axiosinstance';

// interface Follow {
//   isOpen: boolean;
//   onClose: () => void;
// }

// interface Follower {
//   _id: string;
//   username: string;
//   name?: string; // Optional because not all entries may have it
//   email: string;
//   profilePic?: string; // Optional because it might be missing
// }

// const Modal: React.FC<Follow> = ({ isOpen, onClose }) => {
//   const [followers, setFollowers] = useState<Follower[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchFollowers = async () => {
//       const userId = localStorage.getItem('userid');
//       if (!userId) {
//         setError('User ID not found in localStorage');
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await axiosInstance.get(`users/followers/${userId}`);
//         setFollowers(response.data.user.followers); // Access the followers array directly
//         setLoading(false);
//       } catch (err: any) {
//         setError(err.response?.data?.message || 'Failed to fetch followers');
//         setLoading(false);
//       }
//     };

//     if (isOpen) fetchFollowers();
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-start z-[1000] mt-10">
//       <div className="bg-[#2C2C2C] p-6 md:p-8 w-[550px] h-[865px] ml-14 rounded-2xl shadow-lg relative animate-fadeIn border border-[#3b3b3b]">
//         <div className="flex items-start">
//           <button
//             onClick={onClose}
//             className="text-gray-400 hover:text-white transition items-start"
//           >
//             Cancel
//           </button>
//         </div>
//         <div className="flex justify-between">
//           <div>
//             <p className="text-center text-white font-semibold text-lg">
//               Followers
//             </p>
//           </div>
//         </div>
//         <div className="w-full h-px bg-[#444] mb-4"></div>

//         {/* Conditional rendering for loading, error, or followers */}
//         {loading ? (
//           <p className="text-gray-400 text-center">Loading...</p>
//         ) : error ? (
//           <p className="text-red-500 text-center">{error}</p>
//         ) : followers.length > 0 ? (
//           followers.map((follower) => (
//             <div
//               key={follower._id}
//               className="flex items-center gap-4 bg-gray-800 p-3 rounded-lg mb-2"
//             >
//               <img
//                 src={follower.profilePic || '/default-profile.png'} // Fallback to default profile picture
//                 alt={`${follower.username}'s profile`}
//                 className="w-10 h-10 rounded-full"
//               />
//               <div>
//                 <p className="text-white font-medium">
//                   {follower.name || follower.username}
//                 </p>
//                 <p className="text-gray-400 text-sm">{follower.email}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-400 text-center">No followers found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Modal;
