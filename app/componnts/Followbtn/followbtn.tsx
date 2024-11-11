// 'use client';
// import axiosInstance from "@/app/axios/axiosinstance";
// import React, { useEffect, useState } from "react";

// interface FollowBtnProps {
//     userId : string
// }


// const FollowBtn: React.FC<FollowBtnProps> = ({ userId  }) => {
//     const[isfollowing ,setIsFollowing ]=useState<boolean>(false)

//     const senderid=localStorage.getItem('userid')


    
//  const check = async ()=>{
//     try {
//         const res= await  axiosInstance.get(`users/${userId}`)
//         const user= res.data.user
//         setIsFollowing(user.followed)
//     }catch(error){
//         console.log('error',error)
//     }
//  }

//  const handle=async ()=>{
//     if(!senderid){
//         console.log('user not found')
//         return
//     }
        
//     try {
//         if (isfollowing) {
//             await axiosInstance.post(`/users/unfollow/${userId}`, { userUnfollowId: senderid });
//             setIsFollowing(false);
//         } else {
//             await axiosInstance.post(`/users/follow/${userId}`, { userFollowId: senderid });
//             setIsFollowing(true);
//         }
//     }catch{
//         console.log('errror')
//     }
//  }
    

// useEffect(()=>{
//     if(userId===senderid)
//         setIsFollowing(true)
//     check()
// },[userId ,senderid])
    
    
      
    
//         return (
//         <button className='border border-[#3b3b3b] w-28 h-9 rounded-xl' onClick={handle} disabled={!senderid} >{isfollowing ? 'unfollow': 'follow'}</button> 

//         )
//     };
    
//     export default FollowBtn;


'use client';
import axiosInstance from "@/app/axios/axiosinstance";
import React, { useEffect, useState } from "react";

interface FollowBtnProps {
    userId: string;
}

const FollowBtn: React.FC<FollowBtnProps> = ({ userId }) => {
    const [isFollowing, setIsFollowing] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);  // Add a loading state to prevent multiple requests

    const senderId = localStorage.getItem('userid'); // User's ID from localStorage

    // Check follow status on initial render or userId change
    const check = async () => {
        if (!userId || !senderId) return;
        try {
            const res = await axiosInstance.get(`users/${userId}`);
            const user = res.data.user;
            setIsFollowing(user.followed);
        } catch (error) {
            console.log('Error fetching user data:', error);
        }
    };

    // Handle follow/unfollow button click
    const handle = async () => {
        if (!senderId) {
            console.log('User not logged in');
            return;
        }

        setLoading(true);  // Set loading to true before starting the API call

        try {
            if (isFollowing) {
                await axiosInstance.post(`/users/unfollow/${userId}`, { userUnfollowId: senderId });
                setIsFollowing(false);
            } else {
                await axiosInstance.post(`/users/follow/${userId}`, { userFollowId: senderId });
                setIsFollowing(true);
            }
        } catch (error) {
            console.log('Error during follow/unfollow action:', error);
        } finally {
            setLoading(false);  // Set loading back to false after the action completes
        }
    };

    // Run this on initial render or whenever `userId` or `senderId` changes
    useEffect(() => {
        if (userId === senderId) {
            setIsFollowing(true); // If user is trying to follow themselves, they are "automatically following"
        } else {
            check();
        }
    }, [userId, senderId]);

    return (
        <button
            className={`border border-[#3b3b3b] w-28 h-9 rounded-xl ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handle}
            disabled={!senderId || loading} // Disable button if not logged in or while loading
        >
            {loading ? 'Loading...' : isFollowing ? 'Unfollow' : 'Follow'}
        </button>
    );
};

export default FollowBtn;
